const routerx = require( 'express-promise-router');
const userController = require('../controllers/UserController');
const auth = require('../middlewares/auth');
const router=routerx();

router.post('/add', userController.add);
router.get('/query', userController.query);
router.get('/list', userController.list);
router.put('/update', userController.update);
router.delete('/remove',auth.verifyAdministrador,userController.remove);
router.put('/activate',auth.verifyAdministrador,userController.activate);
router.put('/deactivate',auth.verifyAdministrador,userController.deactivate);
router.post('/login',usuarioController.login);

module.exports = router;