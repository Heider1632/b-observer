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

module.exports = router;