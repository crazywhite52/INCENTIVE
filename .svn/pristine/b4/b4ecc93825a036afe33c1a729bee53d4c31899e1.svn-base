var express = require("express");
var request = require("request");
var path = require("path");
var jwt = require("jwt-simple");
const bodyParser = require("body-parser");

var app = express();
var staticPath = path.join(__dirname, "/");
app.use(express.static(staticPath));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});
app.get("/", function(req, res) {
  res.sendfile(__dirname + "/index.html");
});
app.get("/Login", function(req, res) {
  res.sendfile(__dirname + "/index.html");
});
app.get("/settingsys", function(req, res) {
  res.sendfile(__dirname + "/index.html");
});
app.get("/createnewjob", function(req, res) {
  res.sendfile(__dirname + "/index.html");
});
app.get("/createnewjob_claim", function(req, res) {
  res.sendfile(__dirname + "/index.html");
});
app.get("/reportincentive", function(req, res) {
  res.sendfile(__dirname + "/index.html");
});
app.get("/reportincentive_his", function(req, res) {
  res.sendfile(__dirname + "/index.html");
});
app.get("/editp_job/:id", function(req, res) {
  res.sendfile(__dirname + "/index.html");
});

app.use(function(req, res, next) {
  var _send = res.send;
  var sent = false;
  res.send = function(data) {
    if (sent) return;
    _send.bind(res)(data);
    sent = true;
  };
  next();
});

// ROUTE API
app.route("/gateway/routeapinode").post(verifyToken, function(req, res) {
  const { Urlpass, Datapass, Methodpass } = req.body;
  //   DECODE TOKEN
  var Urlpass_decoded = jwt.decode(Urlpass, "123456");
  var headersOpt = {
    "content-type": "application/json",
    'accept-language': 'th-TH,th;en-US,en;q=0.8,he;q=0.6,ru;q=0.4'
  };
  console.log("/gateway/routeapipost-> " + Urlpass_decoded + "->" + new Date());
  if (Methodpass == "GET") {
    request(
      {
        method: Methodpass,
        url: Urlpass_decoded,
        headers: headersOpt,
        json: true
      },
      function(error, response, body) {
        if (!error) {
          res.json(response.body);
        } else {
          res.json({
            status: false,
            message: "No Access API provided.=>" + Urlpass_decoded,
            error: error
          });
        }
      }
    );
  } else {
    request(
      {
        method: Methodpass,
        url: Urlpass_decoded,
        form: Datapass,
        headers: headersOpt,
        json: true
      },
      function(error, response, body) {
        if (!error) {
          res.json(response.body);
        } else {
          res.json({
            status: false,
            message: "No Access API provided.=>" + Urlpass_decoded,
            error: error
          });
        }
      }
    );
  }
});

function verifyToken(req, res, next) {
  var token = req.headers["mis-access-token"];
  var secret = req.headers["mis-access-secret"];

  if (!token || !secret) {
    return res
      .status(401)
      .send({ status: false, message: "No token OR secret provided." });
  }
  //   DECODE TOKEN
  var secret_decoded = jwt.decode(secret, "mis999*");
  var token_decoded = jwt.decode(token, secret_decoded);
  if (token_decoded === "VmriPq93P-jQc=HItb6IpU~go?#UAQ") {
    next();
  } else {
    return res
      .status(401)
      .send({ status: false, message: "No token provided." });
  }
}

app.set("port", process.env.PORT || 5015);
var server = app.listen(app.get("port"), function() {
  console.log("Server Incentive port 5015 Is.. Running");
});

app.use(function(err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    // Send the error rather than to show it on the console
    res.status(401).send(err);
  } else {
    next(err);
  }
});
