const express = require('express');
const models = require('../models');
const passport = require('../middlewares/auth');

const router = express.Router();
const User = models.Users;

router.get('/error', (req, res) => {
  res.sendStatus(401);
})


router.post('/login',
  passport.authenticate('local', { failureRedirect: '/auth/error' }),
  (req, res) => {
    res.json({
      id: req.user.id,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      email: req.user.email,
    });
  });

  router.post('/signup', (req, res) => {
    User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    }).then((user) => {
      req.login(user, () =>
        res.json({ msg: "user created" })
      );
    }).catch(() => {
      res.status(400).json({ msg: "error creating user" });
      
    });
  });

  router.get('/logout', (req, res) => {
    req.logout();
    res.sendStatus(200);
  });
  
  router.get('/profile',
    passport.redirectIfNotLoggedIn('/auth/error'),
    (req, res) => {
      res.json({ msg: "This is the profile page for: "+req.user.email });
  });
module.exports = router;
