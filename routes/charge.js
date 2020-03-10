const routerx = require( 'express-promise-router');
const chargeController = require('../controllers/ChargeController');
const auth = require('../middlewares/auth');
const router=routerx();

router.post('/addCharge', chargeController.addCharge);
router.post('/addGrade', chargeController.addGrade);
router.post('/addGroup', chargeController.addGroup);

router.get('/listCharge', chargeController.listCharge);
router.get('/listGrade', chargeController.listGrade);
router.get('/listGroup', chargeController.listGroup);

router.get('/queryCharge', chargeController.queryCharge);
router.get('/queryGrade', chargeController.queryGrade);
router.get('/queryGroup', chargeController.queryGroup);

module.exports = router;