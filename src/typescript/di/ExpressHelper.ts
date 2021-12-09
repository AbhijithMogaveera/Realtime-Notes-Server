import { Service } from "typedi";
import express from "express";
import "reflect-metadata";

import * as core from "express-serve-static-core";

var port = process.env.PORT || 5000;

@Service()
export class ExpressHelper{

  express = express();
  port = port
  constructor() {
    setUpExpress(this.express);
    listner(this.express);
  }

}

function setUpExpress(app: core.Express) {
  app.use(express.json());
}

function listner(app: core.Express) {
  app.listen(port, () => {
    console.log("The application is listening on port 3000!");
  });
}