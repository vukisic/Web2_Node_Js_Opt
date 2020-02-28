const fs = require("fs");

// Asynchronous
fs.readFile("text_file.txt", "utf8", (err, data) => {
  console.log("<Async>", data);
  fs.writeFile("_text_file_copy.txt", data, () => {
    console.log("<Async> Finished writing to file");
  });
});

// Synchronous
const textFileContent = fs.readFileSync("text_file.txt", "utf8");
console.log("<Sync>", textFileContent);

fs.writeFileSync("_text_file_copy.txt", textFileContent);
console.log("<Sync> Finished writing to file");
