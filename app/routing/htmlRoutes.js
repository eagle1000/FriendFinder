// // Dependencies
var path = require("path");

// HTML Routes
function htmlRoutes(app) {
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/../public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/../public/survey.html"));
});
//DOES NOT WORK
// If no matching route is found default to home
  // app.get("*", function(req, res) {
  //   res.sendFile(path.join(__dirname, "/../public/home.html"));
  // });


} //closing bracket for routes function

module.exports = htmlRoutes;


