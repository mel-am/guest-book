
import Database from "better-sqlite3";
const db = new Database("database2.db");

const existingEpisode = db.prepare(`SELECT * FROM tvshow`).all();
console.log(existingEpisode);
