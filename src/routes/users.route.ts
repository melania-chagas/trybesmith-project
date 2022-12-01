import { Router } from 'express';
import controllerAddNewUser from '../controllers/users.controller';

const usersRouter = Router();

usersRouter.post('/', controllerAddNewUser);

export default usersRouter;
