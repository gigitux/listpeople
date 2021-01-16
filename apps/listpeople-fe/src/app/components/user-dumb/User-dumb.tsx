import { User } from '@listpeople/models';
import React from 'react';
import { Card } from 'react-bootstrap';
import './user-dumb.css';

type Props = {
  user: User;
};

export function UserDumb({ user }: Props) {
  return user ? (
    <div className="card-container">
      <Card style={{ width: '400px' }} className="mb-2">
        <Card.Body>
          <Card.Title>
            {user.first_name} {user.last_name}
          </Card.Title>
          <div className="info-container">
            <span className="info">Email:</span> <span>{user.email}</span>
            <span className="info">Country:</span> <span>{user.country}</span>
            <span className="info">Job Title:</span>{' '}
            <span>{user.job_title}</span>
          </div>
        </Card.Body>
      </Card>
    </div>
  ) : null;
}
