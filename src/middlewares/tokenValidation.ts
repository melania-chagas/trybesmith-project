import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../auth/JWT';

const tokenValidation = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  
  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ message: 'Invalid token' });
  }
  req.body.user = decoded;
  next();
};

export default tokenValidation;