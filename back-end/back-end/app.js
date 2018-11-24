const express = require('express');
const expressSession = require('express-session');
const passport = require('./middlewares/auth');

const PORT = process.env.PORT || 8000;

const app = express();

// Access Body Data
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable sessions & passport
app.use(expressSession(({ secret: 'keyboard cat', resave: false, saveUninitialized: true })));
app.use(passport.initialize());
app.use(passport.session());


// Load Controller
const controllers = require('./controllers');
app.use(controllers);

// Load Models
const models = require('./models');
models.sequelize.sync({force: false})
  .then(() => {
    app.listen(PORT);
    console.log(`Server on localhost ${PORT} is running`);
  });
