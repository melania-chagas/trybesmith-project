import createToken from '../auth/JWT';
import { IUser } from '../interfaces/IUser';
import modelAddNewUser from '../models/users.model';

const serviceAddNewUser = async (newUser: IUser): Promise<string> => {
  await modelAddNewUser(newUser);
  const { username } = newUser;
  return createToken(username);
};

export default serviceAddNewUser;