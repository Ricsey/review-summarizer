import { type Request, type Response } from 'express';
import express from 'express';
import { chatController } from './controllers/chat.controller';
import { reviewController } from './controllers/review.controller';

const router = express.Router();

router.get('/api/hello', (req: Request, res: Response): void => {
  res.json({ message: 'Hello World!' });
});

router.post('/api/chat', chatController.sendMessage);

router.get('/api/products/:id/reviews/', reviewController.getReviews);

export default router;
