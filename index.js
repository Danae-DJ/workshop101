require("dotenv").config();

const express = require("express")
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send("Welcome to my workshop");
});

app.listen (PORT, () => {
    console.log(`http://localhots:${PORT}`);
})