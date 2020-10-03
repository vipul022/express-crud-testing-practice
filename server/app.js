const express = require("express");
const app = express();
const port = 3000;

//get route
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(port, () => {
  console.log(`server running on ${port} `);
});
