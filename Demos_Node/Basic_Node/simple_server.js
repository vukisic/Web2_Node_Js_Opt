const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request was made: " + req.url);

  statusCode = 200;
  headers = { "Content-Type": "text/plain" };
  content = "Hello from server";

  res.writeHead(statusCode, headers);
  res.end(content);
});

port = 3000;
server.listen(port, "127.0.0.1");
console.log(`Listening to port ${port}...`);
