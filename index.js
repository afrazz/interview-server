const express = require("express");
const cors = require("cors");
const connectDB = require("./config/dbConfig");

// Routes
// const authRoute = require("./routes/auth.route");
const bodyParser = require("body-parser");
const authRoute = require("./routes/auth.route");

require("dotenv").config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

// DB Connection
connectDB();

app.use("/api", authRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("app listening on port " + PORT);
});
