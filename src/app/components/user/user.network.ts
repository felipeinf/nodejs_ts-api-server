import express, { Request, Response, Router } from "express";
import response from "app/modules/network/response.module";


const router: Router = express.Router();

router.get('', (req: Request, res: Response) => {
  response.success(req, res, 'User work!');
})

export default router;
