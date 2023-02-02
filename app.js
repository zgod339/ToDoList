// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    let today = new Date();
    let currentDay = today.getDay();
    let currentMonth = today.getDate();
    let day = weekday[currentDay] + ", " + d.getDate() + " " + months[currentMonth];

    res.render("list", { kindOfDay: day, newListItem: items });
});

app.post("/", function (req, res) {
    let item = req.body.newItem;

    items.push(item);

    res.redirect("/")
});


app.listen(3000, function () {
    console.log("Server started on port 3000:");
});