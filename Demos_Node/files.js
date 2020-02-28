const fs = require("fs");

const readFilePath = "text_file.txt";
const writeFilePath = "_text_file_copy.txt";
const encoding = "utf8";

// Asynchronous
fs.readFile(readFilePath, encoding, (err, data) => {
  console.log("<Async>", data);
  fs.writeFile(writeFilePath, data, () => {
    console.log("<Async> Finished writing to file");
  });
});

// Synchronous
const textFileContent = fs.readFileSync(readFilePath, encoding);
console.log("<Sync>", textFileContent);

fs.writeFileSync(writeFilePath, textFileContent);
console.log("<Sync> Finished writing to file");
