import * as request from 'supertest';
import { app, server } from '../../../main';
import { mockListUser } from '../../data/mock_data';
import { getUserInfo } from './user.utilities';
describe('Test USERS endpoint', () => {
  afterAll(async () => {
    server.close();
  });

  it('GET /users/:id , should return book where id=1', async () => {
    const id = 1;
    return request(app)
      .get(`/users/${id}`)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({
          id: 1,
          first_name: 'Antonin',
          last_name: 'McGahern',
          email: 'amcgahern0@nymag.com',
          gender: 'Male',
          country: 'Indonesia',
          job_title: 'Associate Professor',
        });
      });
  });

  it('GET /users , should return all usersInfo', async () => {
    const usersInfo = getUserInfo(mockListUser);

    return request(app)
      .get('/users')
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual(usersInfo);
      });
  });
});

it('GET /users/:id , should return error message when user id is not a valid number', async () => {
  const id = 'aaa';
  return request(app)
    .get(`/users/${id}`)
    .expect(400)
    .then((res) => {
      expect(res.body).toEqual({ message: 'Use a valid id', status: 'error' });
    });
});
