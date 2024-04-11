import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// connect to the database.db file (normally this would be "connect to the database that is hosted elsewhere")
import Database from "better-sqlite3";
const db = new Database("database2.db"); // go and get the existing db file

app.get("/", function (request, response) {
  response.json("Why did the chicken cross the road?.");
});

app.get("/show", function (request, response) {
  // here we use .all instead of .run because we aren't INSERTing, but selecting. So we want to see ALL the results
  const show = db.prepare("SELECT * FROM show").all();
  response.json(show);
});

app.listen(8080, function () {
  console.log("Hello....are you there? 8080");
});