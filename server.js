const express = require("express");
const connectDB = require("./db");

const app = express();

connectDB();

app.use(express.json());

app.use("/api/auth", require("./auth/route"));
app.get("/register", (req, res) => res.send("registered"));
app.get("/login", (req, res) => res.send("logged in"));
app.get("/logout", (req, res) => {
  res.cookie("jwt", "", { maxAge: "1" });
  res.send("logged out");
});

const server = app.listen(5000, () =>
  console.log(`Server Connected at port 5000`)
);

process.on("unhandledRejection", (err) => {
  console.log(`An error occurred: ${err.message}`);
  server.close(() => process.exit(1));
});