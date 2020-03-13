const routerx = require( 'express-promise-router');
const observationController = require('../controllers/ObservationController');
const auth = require('../middlewares/auth');
const router=routerx();

router.post('/add', observationController.add);
router.get('/list', observationController.list);
// router.get('/query', observationController.query);
// router.post('/update', observationController.update);
// router.post('/remove', observationController.remove);

module.exports = router;