import express from "express";
import { AppDataSource } from "./AppDataSource";
import { router } from "./routes/index";

const app = express();

AppDataSource.initialize()
  .then(() => {
    app.use(express.json());

    app.use(router);

    app.listen("3332", () => {
      console.log("Sevidor Aberto na porta 3332!");
    });
  })
  .catch((error) => console.error(error));
