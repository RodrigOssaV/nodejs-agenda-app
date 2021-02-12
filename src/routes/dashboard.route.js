const express = require('express');
const router = express.Router();
const { isNotLoggedIn, isLoggedIn } = require('../lib/auth.lib');

router.get('/', isLoggedIn, (req, res) => {
    res.render('users/dashboard');
});

module.exports = router;