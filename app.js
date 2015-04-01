// /add
// /subtract
// /multiply
// /divide
// Also remember that you'll need body parser.

// req.params // request params
// req.query // query params
// req.body // body params

// Require the modules we're going to need:
var express = require("express"),
    ejs = require("ejs"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override");

// Now instantiate our express app:
var app = express();

// Tell express to use EJS as its view engine
app.set("view engine", "ejs");

// Set up body parser
app.use(bodyParser.urlencoded({ extended: false }));

var x = 0;
var y = 0;
var total = 0;

// Set a root route
app.get('/', function(req, res) {
	res.render("index");
});

app.post('/add', function(req, res) {
	x = parseInt(req.body.x, 10);
	y = parseInt(req.body.y, 10);
	total = x + y;
	console.log(x, y, total);
	res.render("result", { total: total });
});

app.post('/subtract', function(req, res) {
	x = parseInt(req.body.x, 10);
	y = parseInt(req.body.y, 10);
	total = x - y;
	console.log(x, y, total);
	res.render("result", { total: total });
});

app.post('/multiply', function(req, res) {
	x = parseInt(req.body.x, 10);
	y = parseInt(req.body.y, 10);
	total = x * y;
	console.log(x, y, total);
	res.render("result", { total: total });
});

app.post('/divide', function(req, res) {
	x = parseInt(req.body.x, 10);
	y = parseInt(req.body.y, 10);
	total = x / y;
	console.log(x, y, total);
	res.render("result", { total: total });
});

app.listen(3000, function() {
	console.log('Server listening on port 3000');
});