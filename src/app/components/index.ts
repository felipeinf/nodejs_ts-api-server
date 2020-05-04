import { Express } from "express";

import user from "./user/user.component";
import task from "./task/task.component";
import team from "./team/team.component";


const components: Array<Express> = [
  user,
  task,
  team
];

export default components;
