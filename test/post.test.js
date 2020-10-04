const expect = require("expect");
const fs = require("fs");
// testing unit functions defined in utilities.js
// const utilities = require("../server/utils/utilities");
const {
  getAllPosts,
  loadData,
  getDataFileRelativeToApp,
  getPostById,
  addPost,
  updatePost,
  deletePost,
} = require("../server/utils/utilities");
//require test data file
const testDataFile = "../server/data/blog_posts.test.json";
// When we write to the file, the path is relative to app.js
const testDataFileForWrite = getDataFileRelativeToApp(testDataFile);
beforeEach(() => {
  // Set and load data from test data file
  setupData();
});

describe("get all posts", () => {
  test("should get a post if one exist", () => {
    // Pass an empty req object, Object.keys returns an array of all the keys on an object
    expect(Object.keys(getAllPosts({})).length).toBe(1);
  });

  test("user name of the first post must be vipul ", () => {
    expect(getAllPosts({})["1"].username).toBe("vipul");
  });
});

describe("getPostById", () => {
  // Define a req object with the expected structure to pass a parameter
  const req = {
    params: {
      id: "1",
    },
  };
  test("user of post with id 1 should be vipul", () => {
    // console.log("getpost=>", getPostById(req));
    expect(getPostById(req).username).toBe("vipul");
  });
});

describe("addPost", () => {
  test("should add a post", () => {
    // define a req object with expected structure
    const req = {
      body: {
        title: "Another post",
        username: "tester",
        content: "This is another blog post!",
        category: "",
      },
    };
    let post = addPost(req);
    console.log("post=> ", post);
    expect(post.title).toBe(req.body.title);
  });
});

// updatePost
describe("updatePost", () => {
  test("should update a post", () => {
    // set up a req object
    const req = {
      params: {
        id: "1",
      },
      body: {
        title: "Updated post",
        username: "tester",
        content: "This is an updated blog post!",
        category: "",
      },
    };
    let post = updatePost(req);
    expect(post.title).toBe(req.body.title);
  });
});

describe("deletePost", () => {
  test("should delete the specified post", () => {
    let id = "1";
    let blogPosts = deletePost(id);
    let ids = Object.keys(blogPosts);
    expect(ids.includes("1")).toBe(false);
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
