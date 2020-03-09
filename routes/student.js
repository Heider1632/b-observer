const routerx = require( 'express-promise-router');
const studentController = require('../controllers/StudentController');
const auth = require('../middlewares/auth');
const router=routerx();

router.post('/add', studentController.add);
router.get('/list', studentController.list);
router.get('/query', studentController.query);
router.post('/update', studentController.update);
router.post('/remove', studentController.remove);

module.exports = router;