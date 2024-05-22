const db = require("../db");
const bcrypt = require("bcryptjs");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

exports.signup = async (req, res) => {
    const { full_name, email, password } = req.body;

    if (!full_name.trim()) {
        return res.status(400).json({ message: "Enter your Full name" });
    }
    if (!email || !emailRegex.test(email)) {
        return res.status(400).json({ message: "Enter valid Email address" });
    }
    if (!password || password.length < 6) {
        return res.status(400).json({ message: 'Password should be atleast 6 characters' });
    }

    try {
        db.query("SELECT * FROM users WHERE email =?", email, async (err, result) => {
            if (err) throw err;
            if (result.length > 0) return res.status(409).json({ message: "Account already exists" });

            const hashedPassword = await bcrypt.hash(password, 10);
            db.query("INSERT INTO users SET?", { full_name, email, password: hashedPassword }, (err, result) => {
                if (err) throw err;
                res.status(200).json({ message: "User registered successfully" });
            });
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !emailRegex.test(email)) {
        return res.status(400).json({ message: "Please enter a valid email" });
    }
    if (!password || password.length === 0) {
        return res.status(400).json({ message: "Enter password to login" });
    }

    try {
        let sql = "SELECT * FROM users WHERE email =?";
        db.query(sql, email, async (err, result) => {
            if (err) throw err;
            if (!result.length) return res.status(400).json({ message: "Account doesn't exists" });

            const match = await bcrypt.compare(password, result[0].password);
            if (!match) return res.status(400).json({ message: "Incorrect password" });

            req.session.user = result[0];
            delete result[0].password;

            res.status(200).json({ message: "Logged in successfully", user: result[0] });
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};