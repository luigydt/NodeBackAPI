const { Router } = require('express');
const { empresasGet, empresasPost, empresasArrPost} = require('../controllers/empresas');
const routerEmpresas = Router();

routerEmpresas.get('/:id', empresasGet);
routerEmpresas.post('/', empresasPost);
routerEmpresas.post('/:id',empresasArrPost);

module.exports = routerEmpresas;