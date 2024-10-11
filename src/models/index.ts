import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  database: "task_manager",
  username: "postgres",
  password: "123_abc",
  dialect: "postgres",
  host: "127.0.0.1",
});

import { Task } from "./task";

export const models = {
  Task,
};
