const express= require("express") ;
const app = express() ;
const path = require('path');
const methodOverride = require("method-override");

const ejsMate = require('ejs-mate');app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);


// root route
app.get("/", (req, res) => {
    console.log("Root route accessed");
    res.render("index.ejs");
});

app.get("/trackstatus", (req, res) => {
    console.log("Root route accessed");
    res.render("trackstatus.ejs");
});


app.get("/financial", (req, res) => {
    console.log("Contact page accessed");
    res.render("financial.ejs");
});



// dashboard of the authorities
app.get("/dashboard", (req, res) => {
    console.log("Dashboard route accessed");
    res.render("dashboard.ejs");
});

// issue raising portal
app.get("/issue", (req, res) => {
    console.log("Issue route accessed");
    res.render("issue.ejs");
});

// about page
app.get("/aboutus", (req, res) => {
    console.log("About page accessed");
    res.render("about.ejs");
});

// contact page
app.get("/contactus", (req, res) => {
    console.log("Contact page accessed");
    res.render("contactus.ejs");
});


app.get("/faqs", (req, res) => {
    console.log("Contact page accessed");
    res.render("faqs.ejs");
});


app.get("/register", (req, res) => {
    console.log("Contact page accessed");
    res.render("register.ejs");
});



// login page
app.get("/login", (req, res) => {
    console.log("Login page accessed");
    res.render("login.ejs");
});


// listening to the port
app.listen(8000, () => {
    console.log("Listening on port 8000");
});