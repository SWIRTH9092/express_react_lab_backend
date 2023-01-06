//-------------------------------
//   Import Dependencies
//-------------------------------
const express = require("express");
const cors = require("cors");

//-------------------------------
//   Import JSON files
//-------------------------------
const projects = require("./projects.json")
const about = require("./about.json");

//-------------------------------
//   Create our app object
//-------------------------------
const app = express();

//-------------------------------
//   Set up middleware
//-------------------------------
app.use(cors());

//-------------------------------
//   Home route for testing our app
//-------------------------------

app.get("/", (req, res) => {
    res.send ("Hello World");
});

//-------------------------------
//  Route for Retrieving Projects
//-------------------------------
app.get("/projects", (req, res) => {
    //send projects via JSON
    res.json(projects);
});

//-------------------------------
//  Route for retrieving about info
//-------------------------------
app. get("/about", (req, res) => {
    // about via JSON
    res.json(about);
});

//-------------------------------
//   Declare Port variable
//-------------------------------
const PORT = process.env.PORT || 4000;

//-------------------------------
//   Turn on the server listener
//-------------------------------
app.listen(PORT, () => console.log(`listening on port ${PORT}`))


