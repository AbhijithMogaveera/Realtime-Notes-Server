"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlHelper = void 0;
const pg_1 = require("pg");
const typedi_1 = require("typedi");
let SqlHelper = class SqlHelper {
    constructor() {
        const newLocal = {
            connectionString: "...",
            ssl: {
                rejectUnauthorized: false
            },
        };
        const client = new pg_1.Client(newLocal);
        client.connect();
        this.client = client;
    }
};
SqlHelper = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [])
], SqlHelper);
exports.SqlHelper = SqlHelper;
