const express = require("express");
const router = express.Router();
const {
  getPosts,
  getPost,
  makePost,
  changePost,
} = require("../controllers/posts_controller");

//get all posts
router.get("/", getPosts); //get post is defined in posts_controller

//get a particular post
router.get("/:id", getPost);
router.post("/", makePost);
router.put("/:id", changePost);
module.exports = router;
