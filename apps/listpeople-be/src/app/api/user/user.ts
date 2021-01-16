import * as express from 'express';
import { mockListUser } from '../../data/mock_data';
import { BadRequest } from '../../middleware/handler-errors';
import { getUserById, getUserInfo } from './user.utilities';

const router = express.Router();

// #important I think it is better to return all the user object and not just some fields
router.get('/', (_, res) => res.json(getUserInfo(mockListUser)));

router.get('/:id', (req, res, next) => {
  const userId = parseInt(req.params.id, 10);

  try {
    if (Number.isNaN(userId)) {
      throw new BadRequest('Use a valid id');
    } else {
      return res.json(getUserById(userId, mockListUser));
    }
  } catch (err) {
    return next(err);
  }
});

export default router;
