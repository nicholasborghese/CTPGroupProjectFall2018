const express = require('express');
const router = express.Router();


router.use('/auth', require('./auth'));
router.use('/yelp', require('./yelpController'));
router.use('/', require('./home'));



module.exports = router;