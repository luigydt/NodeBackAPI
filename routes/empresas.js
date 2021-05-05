const { Router } = require('express');

const { validarJWT } = require('../middlewares/validar-jwt');
const { validarIdUser, validarIdEmpresa, validarBody, validarIDToken } = require('../middlewares/validar-empresa');


const { 
    empresasGet,
    empresasArrPut,
    empresasPut,
    empresaUpdate,
    empresaDelete } = require('../controllers/empresas');



const routerEmpresas = Router();

routerEmpresas.get('/:id', empresasGet);

routerEmpresas.put('/list/:id', empresasArrPut);

routerEmpresas.put('/:id',  empresasPut);

routerEmpresas.put('/update/:id', empresaUpdate);

routerEmpresas.delete('/:id', empresaDelete);

module.exports = routerEmpresas;