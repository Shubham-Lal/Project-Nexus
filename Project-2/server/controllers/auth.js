const db = require("../db");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
    const { full_name, email, password } = req.body;

    try {
        db.query("SELECT * FROM users WHERE email =?", email, async (err, result) => {
            if (err) throw err;
            if (result.length > 0) return res.status(409).send({ message: "Account already exists" });

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