const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  statusCode = 200;
  headers = { "Content-Type": "text/html" };
  res.writeHead(statusCode, headers);

  const readStream = fs.createReadStream(__dirname + "/index.html", "utf8");
  readStream.pipe(res);
});

port = 3000;
server.listen(port, "127.0.0.1");
console.log(`Listening to port ${port}...`);
