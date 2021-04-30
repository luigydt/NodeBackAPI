const { Router } = require('express');
const { direccionesGet,
    direccionesArrPut,
    direccionPut,
    direccionDelete,
    direccionUpdate} = require('../controllers/direcciones');
const routerDirecciones = Router();

routerDirecciones.get('/id', direccionesGet);
routerDirecciones.put('/listDirecciones', direccionesArrPut);
routerDirecciones.put('/', direccionPut );
routerDirecciones.delete('/', direccionDelete);
routerDirecciones.put('/update', direccionUpdate);

module.exports = routerDirecciones;