let express = require("express");
let myApp = express();

myApp.use(express.urlencoded({ extended: false }));

myApp.get("/", function(req, res) {
  res.send(`
<form action="/answer" method="POST">
<p>What color is the sky?</p>
<input name="skyColor" autocomplete="off">
<button>Submit Answer</button>
</form>
`);
});

myApp.post("/answer", function(req, res) {
  if (req.body.skyColor.toUpperCase() == "BLUE") {
    res.send(`
        <p>Congrats that is the correct answer</p>
        <a href="/">Back to HomePage</a>
        `);
  } else {
    res.send(`
        <p>Sorry that is incorrect</p>
        <a href="/">Back to HomePage</a>
        `);
  }
});

myApp.get("/answer", function(req, res) {
  res.send("Are you lost? Theres nothing to see here");
});
myApp.listen(3000);
