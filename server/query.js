
import Database from "better-sqlite3";
const db = new Database("database.db");

const existingTitles = db.prepare(`SELECT * FROM tvshow`).all();
console.log(existingTitles);
