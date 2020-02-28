const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("request: " + req.url);

  if (req.url === "/index.html" || req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/index.html", "utf8").pipe(res);
  } else if (req.url === "/api/students") {
    students = [
      { name: "Danilo", age: 23 },
      { name: "Vuk", age: 23 }
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(students));
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/404.html", "utf8").pipe(res);
  }
});

port = 3000;
server.listen(port, "127.0.0.1");
console.log(`Listening to port ${port}...`);
