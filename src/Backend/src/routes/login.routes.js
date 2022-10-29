import express from 'express';
import { loginValidate } from '../controllers/login.controller.js';

const router = express.Router();

router.get('/', function (_req, res) {
  res.json({ message: 'Login page' });
});

router.post('/', loginValidate);

export default router;
