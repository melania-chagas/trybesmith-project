import { createToken } from '../auth/JWT';
import { IUser } from '../interfaces/IUser';
import modelAddNewUser from '../models/users.model';

const serviceAddNewUser = async (newUser: IUser): Promise<string> => {
  const user = await modelAddNewUser(newUser);
  const { username, id } = user;
  let token = '';
  if (id) {
    token = createToken(username, id);
  }
  return token;
};

export default serviceAddNewUser;