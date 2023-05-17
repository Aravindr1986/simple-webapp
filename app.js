import express from 'express';
import cookieParser from 'cookie-parser';
import home from './routes/home.js'
import users from './routes/users.js';

var app = express();

app.use(cookieParser())
app.use('/',home)
app.use('/api/v1/users', users);

export default app;
