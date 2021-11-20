import 'reflect-metadata';
import { Router } from "express";
import OccurencesController from '../controllers/OccurencesContoller';
import ensureAuthentcated from '../middlewares/ensureAuthentcated';
import OccValidate from '../middlewares/OccValidate';
import requestSchema from '../middlewares/OngsValidator';


const occRouter = Router();
const occController = new OccurencesController();

occRouter.use(ensureAuthentcated);

occRouter.post('/', OccValidate(requestSchema), occController.create)





export default occRouter;