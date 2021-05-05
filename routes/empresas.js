const { Router } = require('express');

const { validadJWT } = require('../middlewares/validar-jwt');
const { validarIdUser,
        validarIDToken,
        validarBody, 
        validarIdEmpresa} = require('../middlewares/validar-empresa');


const { empresasGet,
        empresasArrPut,
        empresasPut,
        empresaUpdate,
        empresaDelete } = require('../controllers/empresas');

const routerEmpresas = Router();

routerEmpresas.get('/:id', [
    validadJWT,
    validarIdUser,
    validarIDToken
], empresasGet);

routerEmpresas.put('/list/:id', [
    validadJWT

], empresasArrPut);

routerEmpresas.put('/:id', [
    validadJWT,
    validarIdUser,
    validarBody,
    validarIDToken
], empresasPut);

routerEmpresas.put('/:id/update', [
    validadJWT,
    validarIdUser,
    validarIdEmpresa,
    validarBody,
    validarIDToken
], empresaUpdate);

routerEmpresas.delete('/:id', [
    validadJWT
], empresaDelete);

module.exports = routerEmpresas;