const express = require("express");
const connectToDB = require("./config/db");

const app = express();

//connect to db
connectToDB();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
