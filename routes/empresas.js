const { Router } = require('express');

const { validarIdUser,
    validarIDToken,
    validarBody,
    validarIdEmpresa,
    validadJWT,
    validarArrayEmpresa,
    } = require('../middlewares/index');

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

routerEmpresas.put('/:id/list', [
    validadJWT,
    validarIdUser,
    validarArrayEmpresa,
    validarIDToken
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
    validadJWT,
    validarIdUser,
    validarIdEmpresa,
    validarIDToken

], empresaDelete);

module.exports = routerEmpresas;