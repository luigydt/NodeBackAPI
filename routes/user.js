const { Router } = require('express');
const { usuariosGet,
        usuariosPut,
        usuariosDelete,
        usuarioCheck } = require('../controllers/users');
const { validadJWT } = require('../middlewares/validar-jwt');
const { validarUserBody, validarIdUserBody, validarIDToken } = require('../middlewares/validar-userBody');

const router = Router();

router.get('/', usuariosGet);
router.post('/checkUsuario', validarUserBody, usuarioCheck);
router.put('/', validarUserBody, usuariosPut);
router.delete('/:id', [
        validadJWT,
        validarIdUserBody,
        validarIDToken
], usuariosDelete);

module.exports = router;