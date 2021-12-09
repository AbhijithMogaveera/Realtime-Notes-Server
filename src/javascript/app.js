"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgres://nypzfjhlpugecj:03337f885620edc443ff6fa9028609ef8a3259b9529c3b96dcb9cecca8ee232f@ec2-44-198-211-34.compute-1.amazonaws.com:5432/dejhk6va8sf4in",
    ssl: { rejectUnauthorized: false },
});
client.connect();
// client.query("SELECT NOW()", (err, res) => {
//   console.log(err, res);
//   client.end();
// });
