const { Router } = require('express');
const { empresasGet, empresasPost, empresasArrPut, empresasPut, empresaUpdate, empresaDelete} = require('../controllers/empresas');
const routerEmpresas = Router();

routerEmpresas.get('/', empresasGet);
routerEmpresas.post('/', empresasPost);
routerEmpresas.put('/list',empresasArrPut);
routerEmpresas.put('/',empresasPut);
routerEmpresas.put('/update' , empresaUpdate);
routerEmpresas.delete('/', empresaDelete);

module.exports = routerEmpresas;