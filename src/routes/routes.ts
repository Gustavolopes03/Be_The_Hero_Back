import { Router } from 'express';
import ongsRouter from './ongs.routes';

const routes = Router();

routes.use('/ongs', ongsRouter);
routes.use('/occ', occRouter);


export default routes;