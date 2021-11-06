import 'reflect-metadata';
import { Router } from "express";
import OccurencesController from '../controllers/OccurencesContoller';


const occRouter = Router();
const occController = new OccurencesController();



export default occRouter;