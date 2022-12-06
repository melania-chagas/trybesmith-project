import { RowDataPacket } from 'mysql2';
import { ILogin } from '../interfaces/ILogin';
import { IUser } from '../interfaces/IUser';
import connection from './connection';

const modelLogin = async (userLogin: ILogin): Promise<IUser> => {
  const { username } = userLogin;
  
  const [[result]] = await connection.execute<IUser[] & RowDataPacket[]>(
    'SELECT * FROM Trybesmith.Users WHERE username = ?',
    [username],
  );

  return result;
};

export default modelLogin;
