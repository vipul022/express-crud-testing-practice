const express = require("express");
const router = express.Router();
const { getPosts } = require("../controllers/posts_controller");

//get all posts
router.get("/", getPosts); //get post is defined in posts_controller

module.exports = router;
