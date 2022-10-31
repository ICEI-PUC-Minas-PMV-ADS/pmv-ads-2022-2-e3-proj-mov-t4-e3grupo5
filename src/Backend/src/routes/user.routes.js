import express from 'express';
import { registerUSer } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/', registerUSer);

export default router;
