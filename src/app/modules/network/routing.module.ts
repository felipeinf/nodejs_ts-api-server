import { Router, Express } from "express";
import { Route } from "app/interfaces/route.interface";


const routes: Array<Route> = [

];

function setRoutes(server: Express) {
  routes.forEach((route) => server.use(route.path, route.component));
}

export default { setRoutes };
