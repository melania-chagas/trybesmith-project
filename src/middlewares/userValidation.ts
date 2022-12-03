import { Request, Response, NextFunction } from 'express';

const validateUsername = (username:string, _req: Request, res: Response) => {
  if (!username) {
    return res.status(400).json({
      message: '"username" is required',
    });
  }

  if (typeof username !== 'string') {
    return res.status(422).json({ message: '"username" must be a string' });
  }

  if (username.length <= 2) {
    return res.status(422).json({ 
      message: '"username" length must be at least 3 characters long' });
  }
  return false;
};

const validatePassword = (password:string, _req: Request, res: Response) => {
  if (!password) {
    return res.status(400).json({
      message: '"password" is required',
    });
  }

  if (typeof password !== 'string') {
    return res.status(422).json({ message: '"password" must be a string' });
  }

  if (password.length < 8) {
    return res.status(422).json({ 
      message: '"password" length must be at least 8 characters long' });
  }
  return false;
};

const validateClass = (classe: string, _req: Request, res: Response) => {
  if (!classe) {
    return res.status(400).json({
      message: '"classe" is required',
    });
  }

  if (typeof classe !== 'string') {
    return res.status(422).json({ message: '"classe" must be a string' });
  }

  if (classe.length <= 2) {
    return res.status(422).json({ 
      message: '"classe" length must be at least 3 characters long' });
  }
  return false;
};

const validateLevel = (level: number, _req: Request, res: Response) => {
  if (level <= 0) {
    return res.status(422).json({ 
      message: '"level" must be greater than or equal to 1' });
  }
  
  if (!level) {
    return res.status(400).json({
      message: '"level" is required',
    });
  }

  if (typeof level !== 'number') {
    return res.status(422).json({ message: '"level" must be a number' });
  }
  return false;
};

const userValidation = (req: Request, res: Response, next: NextFunction) => {
  const { username, password, classe, level } = req.body;
  if (
    validateUsername(username, req, res) === false
    && validatePassword(password, req, res) === false
    && validateClass(classe, req, res) === false
    && validateLevel(level, req, res) === false
  ) {
    next();
  }
};

export default userValidation;