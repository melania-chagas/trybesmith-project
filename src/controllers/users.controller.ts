import { Request, Response } from 'express';

import serviceAddNewUser from '../services/users.service';

const controllerAddNewUser = async (req: Request, res: Response) => {
  const newUser = req.body;
  const token = await serviceAddNewUser(newUser);
  res.status(201).json({ token });
};

export default controllerAddNewUser;