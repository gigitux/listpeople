import { UserInfo } from '@listpeople/models';
import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../../services/user.services';
import { UsersListDumb } from '../users-list-dumb/Users-list-dumb';

export function UsersListSmart() {
  const [users, setUsers] = useState([] as Array<UserInfo>);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllUsers();
      setUsers(result.data);
    };
    fetchData();
  }, []);

  return <UsersListDumb usersList={users}></UsersListDumb>;
}
