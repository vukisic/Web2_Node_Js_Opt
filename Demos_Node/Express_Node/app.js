const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs"); // setting up template engine (like Razor in ASP.NET)

// GET requests

app.get("/", (req, res) => {
  res.send(`this is a homepage. query: ${JSON.stringify(req.query)}`); // text as response
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/contact.html"); // serving static html
});

app.get("/student/:id", (req, res) => {
  let data = {
    age: 23,
    name: "Djura Djuric",
    id: req.params.id,
    subjects: ["Web2", "BP2", "Grafika"]
  };
  res.render("student", { student: data }); // serving (rendering) files using view engine (default path views/<viewname>)
});

// POST requests

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post("/contact", urlencodedParser, (req, res) => {
  res.send(`You have sent: ${JSON.stringify(req.body)}`);
});

// Listen

const port = 3000;
app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});
