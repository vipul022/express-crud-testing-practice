const dataFile = "../data/blog_posts.json";
let blogPosts = require(dataFile);
const fs = require("fs");

const getAllPosts = (req) => {
  return blogPosts; //
};

// Allows flexibility for testing
// Loads data from dataFile with fs
function loadData(path) {
  blogPosts = JSON.parse(fs.readFileSync(path, "utf8"));
}

const getDataFileRelativeToApp = (file) => {
  // Remove the ../ from the dataFile path for writing
  // because the writeFile looks for path relative to the app, not utilities.js

  // console.log(
  //   "getDataFileRelativeToApp=>",
  //   file.substring(file.lastIndexOf("../") + 3, file.length)
  // );

  return file.substring(file.lastIndexOf("../") + 3, file.length);
};

module.exports = { getAllPosts, loadData, getDataFileRelativeToApp };
