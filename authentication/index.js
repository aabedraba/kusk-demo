const express = require("express");
const auth = require("basic-auth");
const app = express();
const port = process.env.PORT || "8081";

app.use((req, res) => {
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Basic")
  ) {
    res.setHeader('WWW-Authenticate', 'Basic realm="Authenticated"')
    return res.status(401).end("Missing Authorization Header");
  }

  const { name, pass } = auth(req);

  if (name === "bobbylee" && pass === "123456") {
    return res.status(200).end("Authenticated");
  } else {
    return res.status(401).end("Unauthorized");
  }
});

app.listen(parseInt(port, 10), () =>
  console.log(`Listening on http://localhost:${port}!`)
);
