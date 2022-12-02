import { ILogin } from '../interfaces/ILogin';
import { IUser } from '../interfaces/IUser';
import modelLogin from '../models/login.model';

const serviceLogin = async (userLogin: ILogin): Promise<IUser> => {
  const result = await modelLogin(userLogin);

  return result;
};

export default serviceLogin;
