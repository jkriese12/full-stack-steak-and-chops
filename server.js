var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// (DATA)
// =============================================================
var currentRes = [
  {
    name: "jacob",
    email: "Hi@yahoo.com",
    id: "555",
    table: "4",
  },
];

var waitList = [
  {
    name: "jacob",
    email: "Hi@yahoo.com",
    id: "555",
    table: "4",
  },
];

// Routes
// =============================================================

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/current", function (req, res) {
  return res.json(currentRes);
});

app.get("/api/waiting", function (req, res) {
  return res.json(waitList);
});

//Post request
app.post("/reserve", function (req, res) {
  var newRes = req.body;
  if (currentRes.length < 5) {
    newRes.routeName = newRes.name.replace(/\s+/g, "").toLowerCase();
    currentRes.push(newRes);
    res.json(newRes);
  } else {
    newRes.routeName = newRes.name.replace(/\s+/g, "").toLowerCase();
    waitList.push(newRes);
    res.json(newRes);
  }
});
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
  console.log("Visit http://localhost:" + PORT);
});
