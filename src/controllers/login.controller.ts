import { Request, Response } from 'express';
import { createToken } from '../auth/JWT';
import serviceLogin from '../services/login.service';

const controllerLogin = async (req: Request, res: Response) => {
  const { password, username } = req.body;

  const result = await serviceLogin({ username, password });

  const message = 'Username or password invalid';

  if (!result) {
    return res.status(401).json({ message });
  }

  if (username !== result.username) {
    return res.status(401).json({ message });
  }

  if (password !== result.password) {
    return res.status(401).json({ message });
  }

  const { id } = result;
  let token = '';
  if (id) {
    token = createToken(username, id);
  }

  return res.status(200).json({ token });
};

export default controllerLogin;
