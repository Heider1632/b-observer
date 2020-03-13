const routerx = require('express-promise-router');
const userRouter = require("./user");
const chargeRouter = require("./charge");
const studentRouter = require("./student");
const observationRouter = require("./observation");
const router=routerx();

router.use('/user', userRouter);
router.use('/charge', chargeRouter);
router.use('/student', studentRouter);
router.use('/observation', observationRouter);
module.exports = router;