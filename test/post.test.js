const expect = require("expect");
const fs = require("fs");
// testing unit functions defined in utilities.js
// const utilities = require("../server/utils/utilities");
const {
  getAllPosts,
  loadData,
  getDataFileRelativeToApp,
} = require("../server/utils/utilities");
//require test data file
const testDataFile = "../server/data/blog_posts.test.json";
// When we write to the file, the path is relative to app.js
const testDataFileForWrite = getDataFileRelativeToApp(testDataFile);
beforeEach(() => {
  // Set and load data from test data file
  setupData();
});

describe("getting all posts", () => {
  test("should get a post if one exist", () => {
    // Pass an empty req object, Object.keys returns an array of all the keys on an object
    expect(Object.keys(getAllPosts({})).length).toBe(1);
  });

  test("user name of the first post must be vipul ", () => {
    expect(getAllPosts({})["1"].username).toBe("vipul");
  });
});

// Setup and tear down functions
function setupData() {
  let testPostData = {};
  let testPost = {};
  let date = Date.now();
  testPost.title = "Test post 1";
  testPost.username = "vipul";
  testPost.create_date = date;
  testPost.modified_date = date;
  testPost.content = "This is the first test post";
  testPost.category = "";
  testPostData["1"] = testPost;
  // console.log("testPostData=>  ", testPostData);
  // console.log(
  //   "JSON.stringify(testPostData =>>> )   ",
  //   JSON.stringify(testPostData)
  //  );
  fs.writeFileSync(testDataFileForWrite, JSON.stringify(testPostData));
  loadData(testDataFileForWrite);
}
