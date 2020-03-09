const routerx = require( 'express-promise-router');
const usuarioController = require('../controllers/UsuarioController');
const auth = require('../middlewares/auth');
const router=routerx();

router.post('/add', usuarioController.add);
router.get('/query', usuarioController.query);
router.get('/list', usuarioController.list);
router.put('/update',auth.verifyAdministrador,usuarioController.update);
router.delete('/remove',auth.verifyAdministrador,usuarioController.remove);
router.put('/activate',auth.verifyAdministrador,usuarioController.activate);
router.put('/deactivate',auth.verifyAdministrador,usuarioController.deactivate);
router.post('/login',usuarioController.login);

module.exports = router;