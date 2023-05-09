const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo'); 
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');
const categoryRoute = require('./routes/categoryRoute');
const userRoute = require('./routes/userRoute');
const bodyParser = require('body-parser');
const app = express();
const PORT = 7000;
//connect db
mongoose
  .connect('mongodb://127.0.0.1:27017/smartedu-db')
  .then(() => console.log('Connected!'));
//template negine
app.set('view engine', 'ejs');
//Global Variable
global.userIN = null;

//middlewares

app.use(express.static('public'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(
  session({
    secret: 'my_keyboard cat',
    resave: 'false',
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1:27017/smartedu-db' }),
  })
);
//Routes
app.use('*', (req, res, next) => {
  userIN = req.session.userID;
  next();
});
app.use('/', pageRoute);
app.use('/courses', courseRoute);
app.use('/categories', categoryRoute);
app.use('/users', userRoute);

app.get('/contact', (req, res) => {
  res.status(200).render('contact', {
    page_name: 'contact',
  });
});
app.get('/course-single', (req, res) => {
  res.status(200).render('course-single', {
    page_name: 'course-single',
  });
});
app.get('/courses', (req, res) => {
  res.status(200).render('courses', {
    page_name: 'courses',
  });
});
app.get('/dashboard', (req, res) => {
  res.status(200).render('dashboard', {
    page_name: 'dashboard',
  });
});
app.get('/login', (req, res) => {
  res.status(200).render('login', {
    page_name: 'login',
  });
});

app.get('/register', (req, res) => {
  res.status(200).render('register', {
    page_name: 'register',
  });
});
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT} port..`);
});
