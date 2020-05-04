import express, { Express } from "express";
import router from "./task.network";


const task: Express = express();
task.use('/task', router);

export default task;