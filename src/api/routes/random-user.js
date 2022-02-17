import client from '../axios';

export const getRandomUser = () => {
  return client.get('/api/users/random_user');
};
