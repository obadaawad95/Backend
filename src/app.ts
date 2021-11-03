import "module-alias/register";
import "reflect-metadata";
import "dotenv/config";
import { User } from "models";
import express, { Application, Request, Response } from "express";

import { Logger } from "services";
import { initializeDB } from "./database";

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initializeDB();

app.get("/users", async (req: Request, res: Response) => {
  try {
    const users = await User.query();
    res.send({
      users,
    });
  } catch (e: any) {
    Logger.error(e.message);
    res.status(400).send({ status: 400 });
  }
});

app.listen(4000, async () => {
  Logger.info(`🚀 Server started on port 4000`);
});
