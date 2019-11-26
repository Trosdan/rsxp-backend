import { Router } from 'express';

import RankingController from './app/controllers/RankingController'

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Welcome to Omni CLI' }));
routes.get('/ranking', RankingController.index);

export default routes;
