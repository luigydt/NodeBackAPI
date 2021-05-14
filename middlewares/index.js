
const { validarIdUser,
    validarIdEmpresa,
    validarBody,
    validarArrayEmpresa
} = require('./validar-empresa');

const { validarIdUserBody,
    validarUserBody } = require('./validar-userBody');

const { validadJWT,
    validarIDToken } = require('./validar-jwt');

const { validarArrayDirecciones,
    validarBodyDirecciones,
    validarIdDireccion } = require('./validar-direccion');

const { validarIdExpedicion,
    validarQueryExpedicion
} = require('./validar-expedicion')
module.exports = {
    validarIdUser,
    validarIdEmpresa,
    validarBody,
    validarIDToken,
    validarIdUserBody,
    validarUserBody,
    validadJWT,
    validarArrayEmpresa,
    validarArrayDirecciones,
    validarBodyDirecciones,
    validarIdDireccion,
    validarIdExpedicion,
    validarQueryExpedicion
}