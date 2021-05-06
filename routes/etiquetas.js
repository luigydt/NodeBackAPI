const { Router } = require('express');

const {
    validarIdUser,
    validadJWT,
    validarIDToken
} = require('../middlewares/index')

const { etiquetasGet,
    etiquetasUpdate
} = require('../controllers/etiquetas');

const routerEtiquetas = Router();

routerEtiquetas.get('/:id', [
    validadJWT,
    validarIdUser,
    validarIDToken
], etiquetasGet);

routerEtiquetas.post('/:id', [
    validadJWT,
    validarIdUser,
    validarIDToken
], etiquetasUpdate);


module.exports = routerEtiquetas;