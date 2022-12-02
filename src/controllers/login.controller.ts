import { Request, Response } from 'express';
import createToken from '../auth/JWT';
import serviceLogin from '../services/login.service';

const controllerLogin = async (req: Request, res: Response) => {
  const userLogin = req.body;

  const result = await serviceLogin(userLogin);

  const message = 'Username or password invalid';

  if (!result) {
    return res.status(401).json({ message });
  }

  if (userLogin.username !== result.username) {
    return res.status(401).json({ message });
  }

  if (userLogin.password !== result.password) {
    return res.status(401).json({ message });
  }

  const token = createToken(result.username);

  return res.status(200).json({ token });
};

export default controllerLogin;
