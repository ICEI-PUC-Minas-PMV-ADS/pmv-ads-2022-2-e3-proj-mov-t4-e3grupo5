import express from 'express';

const app = express();
app.use(express.json());

import { loginRouter, homeRouter, userRouter } from './routes/index.routes.js';

app.use('/', homeRouter);
app.use('/login', loginRouter);
app.use('/users', userRouter);

app.listen(3000);

export default app;
