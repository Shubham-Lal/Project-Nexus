require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { feedback } = require("./controllers/feedback");

const app = express();

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.status(200).json({ message: "Server running..." }));
app.post('/feedback', feedback);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
