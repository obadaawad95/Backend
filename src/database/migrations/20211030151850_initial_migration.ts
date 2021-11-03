import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", function (table) {
    table.increments("id").primary();
    table.string("name", 255).notNullable();
    table.string("age", 255).notNullable();
    table.string("email", 255).unique().notNullable();
    table.string("gender").notNullable();
    table.date("birthdate").notNullable();
    table.date("visited_at").nullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("users");
}
