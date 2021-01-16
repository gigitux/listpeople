import { User, UserInfo } from '@listpeople/models';
import { clientHttp } from '../../config/client-http';

const enum UserEndpoint {
  GetAll = '/users',
  GetOne = '/users/',
}

export const getAllUsers = async () =>
  await clientHttp.get<Array<UserInfo>>(UserEndpoint.GetAll);

export const getOneUser = async (id: string) =>
  clientHttp.get<User>(`${UserEndpoint.GetOne}/${id}`);
