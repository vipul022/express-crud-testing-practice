const express = require("express");
const app = express();
const postRouter = require("./routes/posts_routes");
const port = 3000;

// parse application/json
app.use(express.json());
//get route
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

//middleware which redirects /posts requests to posts_routes file
app.use("/posts", postRouter);

app.listen(port, () => {
  console.log(`server running on ${port} `);
});
