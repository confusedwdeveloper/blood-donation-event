const express = require("express");
const connectToDB = require("./config/db");

const app = express();

//connect to db
connectToDB();

//enable json body parsing
app.use(express.json());

//define routes
app.use("/api/register", require("./routes/api/register"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/event", require("./routes/api/event"));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
