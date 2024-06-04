const db = require("../db");

exports.feedback = async (req, res) => {
    const { full_name, email, message } = req.body;

    try {
        db.query("INSERT INTO feedback SET?", { full_name, email, message }, (err, result) => {
            if (err) throw err;
            res.status(200).json({ message: "Feedback saved successfully" });
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};