const routerx = require('express-promise-router');
const usuarioRouter = require('./usuario');

const router=routerx();

router.use('/user',usuarioRouter);

module.exports = router;