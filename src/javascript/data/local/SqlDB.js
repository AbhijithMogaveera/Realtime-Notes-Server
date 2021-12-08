"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const ts_postgres_1 = require("ts-postgres");
try {
    var config = {
        user: "nypzfjhlpugecj",
        password: "03337f885620edc443ff6fa9028609ef8a3259b9529c3b96dcb9cecca8ee232f",
        port: 5432,
        host: "ec2-44-198-211-34.compute-1.amazonaws.com",
        database: "dejhk6va8sf4in",
    };
    const conString = "postgres://nypzfjhlpugecj:03337f885620edc443ff6fa9028609ef8a3259b9529c3b96dcb9cecca8ee232f@ec2-44-198-211-34.compute-1.amazonaws.com:5432/dejhk6va8sf4in";
    var client = new ts_postgres_1.Client(config);
    client.connect();
    console.log((_a = client
        .query("SELECT level FROM DUAL CONNECT BY level <=10")
        .rows) === null || _a === void 0 ? void 0 : _a.forEach((it) => {
        it.forEach((it) => {
            console.log(it === null || it === void 0 ? void 0 : it.toLocaleString);
        });
    }));
    console.log();
}
catch (err) {
    console.log("abhi");
}
