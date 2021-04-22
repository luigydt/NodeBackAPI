const { Router } = require('express');
const { usuariosGet, 
        usuariosPut, 
        usuariosPost, 
        usuariosDelete,
        usuarioGet } = require('../controllers/users');


const router = Router();

router.get('/', usuariosGet);
router.get('/:id', usuarioGet);
router.put('/:id', usuariosPut);
router.post('/', usuariosPost);
router.delete('/', usuariosDelete);

module.exports = router;