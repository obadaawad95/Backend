import "dotenv/config";
import { Model } from "objection";
import { Logger } from "services";
import Knex from "knex";

const DATABASE_URL = "postgres://postgres:oaabnhizmzms@localhost:5432/obadadb";

const connection = Knex({
  client: "postgresql",
  useNullAsDefault: true,
  connection: DATABASE_URL,
  migrations: {
    directory: "src/database/migrations",
  },
  seeds: {
    directory: "src/database/seeds",
  },
  searchPath: ["knex", "public"],
});

export const initializeDB = async () => {
  try {
    await Model.knex(connection);
    connection.migrate.latest().catch((e) => Logger.error(e.message));
    Logger.info("Database connection established!");
  } catch (e) {
    Logger.error(e.message);
  }
};
