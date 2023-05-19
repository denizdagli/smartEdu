const nodemailer = require('nodemailer');
exports.getIndexPage = (req, res) => {
  console.log(req.session.userID);
  res.status(200).render('index', {
    page_name: 'index',
  });
};

exports.getAboutPage = (req, res) => {
  res.status(200).render('about', {
    page_name: 'about',
  });
};
exports.getRegisterPage = (req, res) => {
  res.status(200).render('register', {
    page_name: 'register',
  });
};
exports.getLoginPage = (req, res) => {
  res.status(200).render('login', {
    page_name: 'login',
  });
};

exports.getContactPage = (req, res) => {
  res.status(200).render('contact', {
    page_name: 'contact',
  });
};
exports.sendEmail = async (req, res) => {

  try {
    
 
  const outputMessage = `
  <h1> Mail Details </h1>
  <ul>
  <li> Name: ${req.body.name} </li>
  <li> Email: ${req.body.email} </li>
  </ul>
  <h1> Message Details </h1>
<p> ${req.body.message} </p>
  `
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "kdendag@gmail.com", // gemail account
      pass: "idypctbgsxwuuywa" // gemail password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Smart EDU Contact Form" <kdendag@gmail.com>', // sender address
    to: "daglikdeniz@gmail.com", // list of receivers
    subject: "Smart EDU Contact Form New Message", // Subject line
    
    html: outputMessage, // html body
  });
  req.flash("success", "We Received your message succesfully"); 


  res.status(200).redirect('contact');
} catch (error) {
  req.flash("error", `Something happened!`);
  es.status(200).redirect('contact');
}
};