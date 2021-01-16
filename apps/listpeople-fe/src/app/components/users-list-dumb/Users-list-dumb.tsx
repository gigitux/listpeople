import { UserInfo } from '@listpeople/models';
import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { UserSmart } from '../user-smart/User-smart';
import './user-list-dumb.css';
import { useHistory, Route, useParams } from 'react-router-dom';

type Props = {
  usersList: Array<UserInfo>;
};

export function UsersListDumb({ usersList }: Props) {
  const { id } = useParams();

  const [userId, setUserId] = useState<string | null>(id ? id : null);

  const history = useHistory();

  if (usersList.length > 0) {
    const usersListEl = usersList.map(({ id, first_name, last_name }) => {
      const idString = id.toString();

      return (
        <ListGroup.Item
          key={id}
          active={userId === idString}
          onClick={() => {
            setUserId(idString);
            history.push(idString);
          }}
        >
          {first_name} {last_name}
        </ListGroup.Item>
      );
    });

    return (
      <div className="container">
        <ListGroup>{usersListEl}</ListGroup>
        <Route
          path="/:id"
          render={({ match }) => {
            return <UserSmart userId={match.params.id}></UserSmart>;
          }}
        />
      </div>
    );
  } else {
    return (
      <div className="container">
        <span>Users not found</span>
      </div>
    );
  }
}
