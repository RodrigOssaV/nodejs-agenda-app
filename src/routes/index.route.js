const express = require('express');
const router = express.Router();
const { isNotLoggedIn } = require('../lib/auth.lib');

router.get('/', isNotLoggedIn, (req, res) => {
    res.render('index');
});

module.exports = router;