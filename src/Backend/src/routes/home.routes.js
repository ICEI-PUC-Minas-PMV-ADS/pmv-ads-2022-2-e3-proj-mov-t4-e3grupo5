import express from 'express';

const router = express.Router();

router.get('/', function (_req, res) {
  res.json({ message: 'Home page' });
});

export default router;
