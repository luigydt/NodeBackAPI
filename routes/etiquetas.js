const { Router } = require('express');
const { etiquetasGet,
    etiquetasUpdate,
    etiquetasDelete,
    etiquetasInsert } = require('../controllers/etiquetas');
const routerEtiquetas = Router();


routerEtiquetas.get('/', etiquetasGet);
routerEtiquetas.put('/', etiquetasInsert);
routerEtiquetas.put('/update', etiquetasUpdate)
routerEtiquetas.delete('/', etiquetasDelete);


module.exports = routerEtiquetas;