const routerx = require('express-promise-router');
const userRouter = require("./user");
const chargeRouter = require("./charge");

const router=routerx();

router.use('/user', userRouter);
router.use('/charge', chargeRouter);
module.exports = router;