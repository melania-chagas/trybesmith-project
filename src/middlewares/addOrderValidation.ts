import { Request, Response, NextFunction } from 'express';

const addOrderValidation = (req: Request, res: Response, next: NextFunction) => {
  const { productsIds } = req.body;

  if (!productsIds) {
    return res.status(400).json({ message: '"productsIds" is required' });
  }

  // https://www.folkstalk.com/tech/javascript-typeof-array-with-code-examples/

  const isArray = Array.isArray(productsIds);
  if (!isArray) {
    return res.status(422).json({ message: '"productsIds" must be an array' });
  }

  if (productsIds.length === 0) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }

  next();
};

export default addOrderValidation;