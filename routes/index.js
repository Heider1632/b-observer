var router = require('express').Router();

router.use('/api', require('./api'));

router.use('/', (req, res) => {
    res.send("b-observer app v1")
})

module.exports = router;
