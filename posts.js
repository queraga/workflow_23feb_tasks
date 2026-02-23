const fs = require("fs");
const axios = require("axios");

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    fs.writeFileSync("posts.txt", JSON.stringify(res.data, null, 2));
    console.log("Posts saved to posts.txt");

    const content = fs.readFileSync("posts.txt", "utf-8");
    console.log(content);
  })
  .catch((err) => {
    console.log("Error:", err.message);
  });
