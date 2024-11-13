
// "require('sqlite3'):" Loads the sqlite3 library so you can use SQLite in your Node.js code.
// ".verbose():" Adds extra debugging information, which is helpful for spotting issues when you’re developing.

const sqlite3 = require("sqlite3").verbose();



// this connects to database
// 'new sqlite3.Database('./todos.db'):' This opens (or creates) the todos.db file as a database.
// "const db = ...:"" Stores this database connection in db so you can use it later.
// "(err) => { ... }:"" Runs if there’s an error when opening the database, helping us handle problems if they happen.
const db = new sqlite3.Database('./todos.db', (err) => {
    if (err) {
        console.error("ERROR! Can't connect to SQlite DB.", err);

    } else {
        console.log("Connected SQlite DB.");
    }
});