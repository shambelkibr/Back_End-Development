// Create server file
const express = require("express");
const app = express();

// First route
app.get("/", (req, res) => {
  res.send("Home route is working");
});

app.get("/about", (req, res) => {
  res.send("About page");
});
app.get("/contact", (req, res) => {
  res.send("User Lists");
});

app.get("/users", (req, res) => {
  res.json({
    message: "user Routes",
    sucess: true,
  });
});

app.get("/services", (req, res) => {
  res.status(200).json({
    users: ["sam", "sham", "alt"],
  });
  
});
app.listen(2000, () => {
  console.log(`server is running on port ${2000}`);
});
