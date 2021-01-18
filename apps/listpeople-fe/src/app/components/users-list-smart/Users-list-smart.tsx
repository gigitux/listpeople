import { UserInfo } from '@listpeople/models';
import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../../services/user.services';
import { UsersListDumb } from '../users-list-dumb/Users-list-dumb';

export function UsersListSmart() {
  const [usersInfo, setUsers] = useState({
    users: [] as Array<UserInfo>,
    error: false,
    isLoading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllUsers();
        setUsers({ users: result.data, error: false, isLoading: false });
      } catch (err) {
        setUsers({ users: [], error: true, isLoading: false });
      }
    };
    fetchData();
  }, []);

  if (usersInfo.isLoading) {
    return <span>Loading</span>;
  } else {
    return usersInfo.error ? (
      <span>Ooop, there is an error</span>
    ) : (
      <UsersListDumb usersList={usersInfo.users}></UsersListDumb>
    );
  }
}
