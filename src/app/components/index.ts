import { Express } from "express";

import user from "./user/user.component";
import task from "./task/task.component";


const components: Array<Express> = [
  user,
  task
];

export default components;
