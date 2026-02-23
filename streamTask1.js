const fs = require("fs");

const stream = fs.createReadStream("largeFile.txt", "utf-8");

stream.on("data", (chunk) => {
  console.log("CHUNK:");
  console.log(chunk);
});

stream.on("end", () => {
  console.log("done reading file");
});

stream.on("error", (err) => {
  console.log("Error:", err.message);
});
