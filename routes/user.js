const { Router } = require('express');
const { usuariosGet, 
        usuariosPut, 
        usuariosPost, 
        usuariosDelete,
        usuarioGet,
        usuarioCheck } = require('../controllers/users');

const router = Router();

router.get('/', usuariosGet);
router.post('/checkUsuario', usuarioCheck);
router.get('/:id', usuarioGet);
router.put('/', usuariosPut);
router.post('/', usuariosPost);
router.delete('/', usuariosDelete);

module.exports = router;