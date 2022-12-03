import { Router } from 'express';
import controllerAddNewUser from '../controllers/users.controller';
import userValidation from '../middlewares/userValidation';

const usersRouter = Router();

usersRouter.post('/', userValidation, controllerAddNewUser);

export default usersRouter;
