import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUser } from '../interfaces/IUser';

const modelAddNewUser = async (body: IUser): Promise<IUser> => {
  const { username, classe, level, password } = body;
  
  const [{ insertId }] = await connection.execute<ResultSetHeader>(`INSERT INTO Trybesmith.Users 
  (username, classe, level, password) VALUES (?,?,?,?)`, [username, classe, level, password]);
  return { id: insertId, ...body };
};

export default modelAddNewUser;