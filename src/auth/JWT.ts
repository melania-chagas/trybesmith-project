import jwt from 'jsonwebtoken';

/* https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/0ca77b1d-4770-4646-8368-167d2305e763/day/85fd2ed3-f6cc-4789-8990-7f5fe827422c/lesson/71107d81-f5bd-44ac-8bfb-5d5b0908cb0e */

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const createToken = (user: string): string => {
  const token = jwt.sign(
    {
      data: {
        user,
      },
    },
    secret,
    { expiresIn: '7d', algorithm: 'HS256' },
  );

  return token;
};

export default createToken;