const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5500", "http://127.0.0.1:5500"],
  }),
);

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>");
});

app.get("/message", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

app.post("/message", (req, res) => {
  const { name, message } = req.body;

  res.json({ message: `Hello, ${name}! You said: ${message}` });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
