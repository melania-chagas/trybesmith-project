import { Request, Response } from 'express';

const validateName = (name:string, _req: Request, res: Response) => {
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  if (typeof name !== 'string') {
    return res.status(422).json({ message: '"name" must be a string' });
  }

  if (name.length < 3) {
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
  }
};

const validateAmount = (amount: string, _req: Request, res: Response) => {
  if (!amount) {
    return res.status(400).json({ message: '"amount" is required' });
  }

  if (typeof amount !== 'string') {
    return res.status(422).json({ message: '"amount" must be a string' });
  }

  if (amount.length < 3) {
    return res.status(422).json({ message: '"amount" length must be at least 3 characters long' });
  }
};

const validationProduct = (req: Request, res: Response) => {
  const { name, amount } = req.body;

  validateName(name, req, res);
  validateAmount(amount, req, res);
};

export default validationProduct;