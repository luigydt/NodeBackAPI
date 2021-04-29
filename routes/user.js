const { Router } = require('express');
const { usuariosGet, 
        usuariosPut,          
        usuariosDelete,        
        usuarioCheck } = require('../controllers/users');

const router = Router();

router.get('/', usuariosGet);
router.post('/checkUsuario', usuarioCheck);
router.put('/', usuariosPut);
router.delete('/', usuariosDelete);

module.exports = router;