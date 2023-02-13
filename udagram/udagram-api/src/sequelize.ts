import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize
("postgres://postgres:Sarah13zzxxss@database-1.cr6aoymsqie2.us-east-1.rds.amazonaws.com:5432/postgres");
