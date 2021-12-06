"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const ts_postgres_1 = require("ts-postgres");
try {
    var config = {
        user: "admin",
        password: "admin",
        port: 5432,
        host: "192.168.104.43",
        database: "notes"
    };
    const conString = "postgres://abhi:abhi1234@localhost:5432/notes";
    var client = new ts_postgres_1.Client(config);
    client.connect();
    console.log((_a = client.query("SELECT level FROM DUAL CONNECT BY level <=10").rows) === null || _a === void 0 ? void 0 : _a.forEach((it) => {
        it.forEach((it) => {
            console.log(it === null || it === void 0 ? void 0 : it.toLocaleString);
        });
    }));
    console.log();
}
catch (err) {
    console.log("abhi");
}
