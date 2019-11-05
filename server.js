const rp = require("request-promise");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());

const router = express.Router();
router.get("/questions/:id?", (req, res) => {
  const { id } = req.params;
  const requestOptions = {
    method: "GET",
    uri: `https://polls.apiblueprint.org/questions${id ? `/${id}` : ""}`,
    json: true,
    gzip: true
  };

  rp(requestOptions)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      console.log("API call error:", err.message);
    });
});
router.post("/questions", (req, res) => {
  console.log(req.body);
  const requestOptions = {
    method: "POST",
    uri: "https://polls.apiblueprint.org/questions",
    body: req.body,
    json: true,
    gzip: true
  };

  rp(requestOptions)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      console.log("API call error:", err.message);
    });
});
router.post("/questions/:id/choices/:c_id", (req, res) => {
  const { id, c_id } = req.params;
  const requestOptions = {
    method: "POST",
    uri: `https://polls.apiblueprint.org/questions/${id}/choices/${c_id}`,
    json: true,
    gzip: true
  };

  rp(requestOptions)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      console.log("API call error:", err.message);
    });
});

app.use("/api", router);

app.listen(5000, () => {
  console.log(`Server running on port 5000`);
});
