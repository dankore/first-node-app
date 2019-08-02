let http = require("http");
let ourApp = http.createServer(function(req, res) {
  if (req.url == "/") {
    res.end("Hello, and welcome to our website");
  }
  if (req.url == "/about") {
    res.end("Thanks for interest");
  }
  res.end('We cannot find the page you are looking for')
});
ourApp.listen(3000);
