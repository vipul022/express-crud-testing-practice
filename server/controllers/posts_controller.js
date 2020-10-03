const { getAllPosts } = require("../utils/utilities");

const getPosts = (req, res) => {
  res.send(getAllPosts(req)); //getAllPosts is defined in utils
};

module.exports = { getPosts };
