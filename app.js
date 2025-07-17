const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const path = require("path");
const authroutes = require("./routes/authroutes");
const crudroutes = require("./routes/crudroutes");
const conMongoDB = require("./dbconnection/db");

const app = express();
conMongoDB();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

app.use('/', authroutes);
app.use('/crud', crudroutes);

app.get('/', (req, res) => {
  res.render('auth/login'); // renders views/auth/login.ejs
});


app.listen(4000, () => {
  console.log('running');

});
