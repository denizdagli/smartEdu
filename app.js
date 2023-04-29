const express = require('express');
const app = express();
const PORT = 7000;

//template negine
app.set('view engine', 'ejs');
//middlewares
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.status(200).render('index', {
    page_name: 'index',
  });
});

app.get('/about', (req, res) => {
  res.status(200).render('about', {
    page_name: 'about',
  });
});
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
