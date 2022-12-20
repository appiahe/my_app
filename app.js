
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
var _ = require('lodash');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


// Get the year
const d = new Date();
let year = d.getFullYear();


app.get("/:linkName",function(req,res){
  const requiredTitle = (req.params.linkName);
  console.log(requiredTitle)

  res.render(""+requiredTitle+"",{titlePosition:requiredTitle,currentYear:year});
});

function getNameAttribute() {
    console.log(document.getElementById("name")); //Or do something else with the name, `element.name` contains the value of the name attribute.
}
///////////////home route ///////////////////////////////
app.get("/",function(req,res){
  res.render("home",{currentYear:year});
});


//////////////////thank you page route for get/////////////////
app.get("/thanks",function(req,res){
  res.render("thanks");
});





app.listen(3000,function(){
  console.log("server starts on port 3000");
})
