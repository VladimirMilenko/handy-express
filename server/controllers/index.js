const express = require('express'),
    router = express.Router();

router.use('/users',require('./users'));
router.use('/categories',require('./categories'));
router.use('/services',require('./services'));

module.exports = router;