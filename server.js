
var express = require("express");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// (DATA)
// =============================================================
var arrData = [
    {


    },
    {


    },
    {


    }
];

// Routes
// =============================================================

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});





// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
    console.log("Visit http://localhost:" + PORT);
});
