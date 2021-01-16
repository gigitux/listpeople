import { User } from '@listpeople/models';
import React, { useEffect, useState } from 'react';
import { getOneUser } from '../../services/user.services';
import { UserDumb } from '../user-dumb/User-dumb';

type Props = {
  userId: string | null;
};

export function UserSmart({ userId }: Props) {
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    const fetchData = async () => {
      const result = userId ? await getOneUser(userId) : null;
      result ? setUser(result.data) : void 0;
    };
    fetchData();
  }, [userId]);

  return user ? <UserDumb user={user}></UserDumb> : null;
}
