import { Router } from 'express';
import User from './app/controllers/UserController';

import RankingController from './app/controllers/RankingController';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Welcome to Omni CLI' }));
routes.get('/ranking', RankingController.index);
routes.post('/store', User.store);

export default routes;
