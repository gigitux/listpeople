import { User, UserInfo } from '@listpeople/models';
import { propEq } from '@listpeople/utilities';

export const getUserById = (id: number, users: Array<User>) =>
  users.find(propEq('id', id));

export const getUserInfo = (users: Array<User>): Array<UserInfo> =>
  users.map(({ id, first_name, last_name, gender }) => ({
    id,
    first_name,
    last_name,
    gender,
  }));
