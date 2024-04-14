import Database from "better-sqlite3";
const db = new Database("database2.db");

// create a table
db.exec(`
    CREATE TABLE IF NOT EXISTS tvshow (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        number INTEGER NOT NULL,
        title TEXT NOT NULL,
        season INTEGER NOT NULL,
        episode INTEGER NOT NULL,
        imgUrl TEXT
    )
`);

// populate the show table
const insertShow = db.prepare(`
    INSERT INTO tvshow (number, title, season, episode, imgUrl) VALUES (?, ?, ?, ?, ?)
`);

insertShow.run(
  10, "Critical Film Studies",
  2,
  19,
  "https://ew.com/thmb/RMJf99GXFLEivQbseq1VDDWVmqY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-149657572-ac339e70aaa64445b37a4abe2c4e10f7.jpg"
);
insertShow.run(
  9,
  "Cooperative Polygraphy",
  5,
  4,
  "https://ew.com/thmb/vvJGkK4H-Cg-iqJqv4mennp8S_U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-463367881-b03463849fbe4aa7bddd12deb53f8e69.jpg"
);
  insertShow.run(
  8,
  "Mixology Certification",
  2,
  10,
  "https://ew.com/thmb/g3geIwCu5FEAEQcAWhjKNuPZmGs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-138386233-70dcc7ba12b94e149c4ee74f96e676e9.jpg"
);
insertShow.run(
  7,
  "Emotional Consequences of Broadcast Television",
  6,
  13,
  "https://ew.com/thmb/qr_NLN0E1pvONeKR-Ql0MLJ9u5s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TCDCOMM_EC297-031720ae6f274b9997c71f686dce8ddb.jpg"
);
insertShow.run(
  6,
  "Pillows and Blankets",
  3,
  14,
  "https://ew.com/thmb/Ql3Y-RVtbhpACiF6BxUDuXAbca4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-945469278-37d546cbc01848f38987c1b95ff71d30.jpg"
);
insertShow.run(
  5,
  "Cooperative Calligraphy",
  2,
  8,
  "https://i.ytimg.com/vi/ZZSwdqg6VE4/maxresdefault.jpg"
);
insertShow.run(
  4,
  "Basic Lupine Urology",
  3,
  17,
  "https://ew.com/thmb/cf7lL6vUPYj-7bnPGosNg-rYTt0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-945854852-59ccb2e2e95c46219a551f6d61720d48.jpg"
);
insertShow.run(
  3,"Modern Warfare",
  1,
  23,
  "https://ew.com/thmb/fESlmK72UYjpPI7wabCF08sDjTw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-141249579-2c594b11e3144a01a433a27c4ffcdc2f.jpg"
);
insertShow.run(
  2,
  "Paradigms of Human Memory",
  2,
  21,
  "https://ew.com/thmb/IwT5QSyhcGyFl5e3k7FBcU9lzXQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-138418549-a2e435e54d4946d7a96bc773fc0c968d.jpg"
);
insertShow.run(
  1,
  "Remedial Chaos Theory",
  3,
  3,
  "https://ew.com/thmb/5SVxaYS0q0ec0USvdKyhQILxipk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Community2-d274890efbd94b2e94192006a35454d1.jpg"
);

db.exec(`
    CREATE TABLE IF NOT EXISTS reviews (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        tvshow_id INTEGER,
        name TEXT NOT NULL,
        message TEXT
    )
`);

// populate the show table
// const insertReviews = db.prepare(`
//     INSERT INTO reviews (name, review ) VALUES (?, ?, ?)
// `);

// insertReviews.run(
  
// );