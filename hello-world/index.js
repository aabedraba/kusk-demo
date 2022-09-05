const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  const hostname = process.env.HOSTNAME || null;
  if (hostname === null) {
    return res.send(
      "No hostname information, perhaps the application is not running in Kubernetes?"
    );
  }
  return res.send({
    message: "Hello from Pod " + hostname
  })
});

app.get("/hello", (_, res) => {
  res.send({
    message: "Hello from an implemented service!",
  });
});

app.post("/validated", (req, res) => {
  res.send({
    message: "Hello " + req.body.name + "!",
  });
});

const port = process.env.PORT || "8080";

app.listen(port, () => {
  console.log("Listening on http://localhost:" + port);
});
