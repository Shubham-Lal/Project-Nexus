const express = require("express");
const { signup, login } = require("../controllers/auth.js");

const router = express.Router();

router.get('/', (req, res) => res.status(200).json({ message: "Server running..." }));
router.post('/signup', signup);
router.post('/login', login);
router.delete('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.sendStatus(500);
        }
        res.clearCookie('connect.sid');
        res.sendStatus(204);
    });
});

module.exports = router;