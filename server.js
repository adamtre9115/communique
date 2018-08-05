const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config/database");
const routes = require("./routes");
const index = require("./routes/api");
const register = require("./routes/api/registerRoute")
// const registerRoutes = require("./routes/registerRoute");

const PORT = process.env.PORT || 3001;

// initialize mongo connection
mongoose.connect(
  config.database,
  { useNewUrlParser: true }
);

mongoose.connection.on("connected", () => {
  console.log(`DB connection to ${config.database} initialized`);
});

// initialize express
const app = express();

// allow cross origin access
app.use(cors());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

// client side static folder
app.use(express.static(path.join(__dirname, "client")));

// configure middleware
app.use(express.json());

app.use("/", routes);
app.use("/api", index);
app.use("/api/register", register);

// send every request to react
app.get("*", function(req, res) {
});


app.listen(PORT, () => {
  console.log(`Server now listening on ${PORT}`);
});
