const express = require("express");

const app = express();

app.listen(3000, () => { 
  console.log("Server started (http://localhost:3000/) !");
});

app.get("/", (req, res) => { 
  res.send ("Hello world...");
});

// app.get("/", (req, res) => { 
//   // res.send("Hello world...");
//   res.render("index");
// });

app.set("view engine", "ejs");

const path = require("path");
app.set("views", path.join(__dirname, "views"));


app.use(express.static(path.join(__dirname, "public")));






// app.get("/about", (req, res) => {
//   res.render("about");
// });






