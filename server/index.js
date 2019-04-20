const express = require("express");
const path = require("path");
const hsts = require("hsts");
const forceDomain = require("forcedomain");

const app = express();
const port = 8081;

app.use(
  forceDomain({
    hostname: "hireflow.co",
    protocol: "https"
  })
);

app.use(
  hsts({
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  })
);

app.use(express.static(path.join(__dirname, "../build")));

app.route("*").all((req, res) => {
  if (req.url === "" || req.url === "/") {
    return res.status(200).sendFile(path.join(__dirname + "./../build/index.html"));
  } else {
    return res.sendStatus(404);
  }
});

app.listen(port, () => {
  console.log(`App listening at port:${port}`);
});
