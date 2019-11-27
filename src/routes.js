import { Router } from 'express';
import UserController from './app/controllers/UserController';

import RankingController from './app/controllers/RankingController';

import ScoreController from './app/controllers/ScoreController';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Welcome to Omni CLI' }));
routes.get('/ranking', RankingController.index);

routes.post('/user', UserController.store);
routes.get('/user', UserController.index);
routes.get('/user/:id', UserController.show);

routes.post('/score/:userId', ScoreController.store);

export default routes;
