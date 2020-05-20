import express, { Request, Response, Router } from "express";
import { User } from "./user.model";
import response from "app/modules/network/response.module";
import controller from "./user.controller";


const router: Router = express.Router();

router.get('', (req: Request, res: Response) => {
  response.success(req, res, 'User work!')
});

router.get('/all', async (req: Request, res: Response) => {
  try {
    const result: Array<User> = await controller.getUsers();
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

export default router;
