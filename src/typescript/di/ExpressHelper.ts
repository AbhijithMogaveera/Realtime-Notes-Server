import { Service } from "typedi";
import express from "express";
import "reflect-metadata";

import * as core from "express-serve-static-core";

@Service()
export class ExpressHelper{
  app = express();
  constructor() {
    setUpExpress(this.app);
  }
}

function setUpExpress(app: core.Express) {
  app.use(express.json());
}
