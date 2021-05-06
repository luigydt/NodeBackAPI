const { Router } = require('express');

const { direccionesGet,
    direccionesArrPut,
    direccionPut,
    direccionDelete,
    direccionUpdate } = require('../controllers/direcciones');
const { validarArrayDirecciones,
    validarBodyDirecciones,
    validarIdDireccion,
    validarIdUser,
    validadJWT,
    validarIDToken } = require('../middlewares/index');
const routerDirecciones = Router();

routerDirecciones.get('/:id', [
    validadJWT,
    validarIdUser,
    validarIDToken
], direccionesGet);//Get Direcciones from :id (Usuario)

routerDirecciones.put('/:id/list', [
    validadJWT,
    validarIdUser,
    validarArrayDirecciones,
    validarIDToken
], direccionesArrPut);//Insert Bloque TSQL, validando cada una y si falla no sube ninguna

routerDirecciones.put('/:id', [
    validadJWT,
    validarIdUser,
    validarBodyDirecciones,
    validarIDToken
], direccionPut);

routerDirecciones.delete('/:id', [
    validadJWT,
    validarIdUser,
    validarIdDireccion,
    validarIDToken
], direccionDelete);

routerDirecciones.post('/:id', [
    validadJWT,
    validarIdUser,
    validarIdDireccion,
    validarBodyDirecciones,
    validarIDToken
], direccionUpdate);//Update

module.exports = routerDirecciones;