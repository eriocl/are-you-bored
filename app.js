require('dotenv').config();

const express = require('express');
const path = require('path');
const hbs = require('hbs');
const logger = require('morgan');
const redisClient = require('redis').createClient();
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

const indexRouter = require('./routes/indexRouter');
const userRouter = require('./routes/userRouter');

const app = express();
const { PORT } = process.env || 3000;

// view engine setup
app.set('views', path.join(process.env.PWD, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(process.env.PWD, 'views/partials'));
// hbs.registerHelper('isFirstElement', isFirstElement);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.env.PWD, 'public')));

app.use(
  session({
    name: 'sid',
    store: new RedisStore({ client: redisClient }),
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
    resave: false,
  }),
);
// session middleware
app.use((req, res, next) => {
  res.locals.user = req.session.user;
  next();
});

app.use('/', indexRouter);
app.use('/users', userRouter);

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});

module.exports = app;
