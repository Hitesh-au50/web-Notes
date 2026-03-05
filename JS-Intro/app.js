const { urlencoded } = require("express");
const express = require("express");

const app = express();

// app.get("/homepage", (req, res) => {
//   res.send("This is home page.");
// });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("we are live");
});
app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/registration.html");
});

app.post("/home", (req, res) => {
  // let data = req.body;
  // console.log(req.body);
  let password = "ajinkya";
  let loginId = "mahesh";
  if (loginId == req.body.firstname && password == req.body.password) {
    res.sendFile(__dirname + "/homepage.html");
  } else {
    res.send("incorrect details");
  }
  // res.send("This is home page with post request.");
});

// PORT
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});