import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import CommentController from './app/controllers/CommentController';
import FilterBusinessesController from './app/controllers/FilterBusinessesController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/businesses', FilterBusinessesController.index);

routes.get('/users', UserController.show);
routes.put('/users', UserController.update);

routes.get('/businesses', FilterBusinessesController.index);

routes.get('/comments', CommentController.index);
routes.post('/comments/:company_id', CommentController.store);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
