const { Router } = require('express');
const { direccionesGet} = require('../controllers/direcciones');
const routerDirecciones = Router();

routerDirecciones.get('/:id', direccionesGet);

module.exports = routerDirecciones;