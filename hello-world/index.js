const express = require("express");

const app = express();
app.use(express.json());

app.get("/hello", function (_, res) {
  res.send({
    message: "Hello from an implemented service!",
  });
});

app.post("/validated", function (req, res) {
  res.send({
    message: "Hello " + req.body.name + "!",
  });
});

const port = process.env.PORT || "8080";
app.listen(port, function () {
  console.log("Listening on http://localhost:" + port);
});
