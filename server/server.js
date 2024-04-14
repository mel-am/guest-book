import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());


import Database from "better-sqlite3";
const db = new Database("database2.db");

app.get("/", function (request, response) {
  response.json("Why did the chicken cross the road?.");
});

app.get("/show", function (request, response) {
  
  const show = db.prepare("SELECT * FROM tvshow").all();
  response.json(show);
});

app.post("/messages", function (req, res) {
  console.log("req.body", req.body);

  const episode = req.body.episode;
  const user = req.body.user;
  const review = req.body.review;
  const opinion = req.body.opinion;
  console.log("Received message:", review);
  res.json({ status: "Message received!" });
});


app.listen(8080, function () {
  console.log("Hello....are you there? 8080");
});
