const express = require("express");
const app = express();

const users = [
  { id: 1, name: "shanbel" },
  { id: 2, name: "brtukan" },
  { id: 3, name: "mekkonn" },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
