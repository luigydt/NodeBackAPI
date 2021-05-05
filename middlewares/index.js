
const { validarIdUser,
    validarIdEmpresa,
    validarBody,
    validarIDToken,
    validarArrayEmpresa
 } = require('./validar-empresa');

const { validarIdUserBody,
    validarUserBody } = require('./validar-userBody');

const { validadJWT } = require('./validar-jwt');

module.exports = {

    validarIdUser,
    validarIdEmpresa,
    validarBody,
    validarIDToken,
    validarIdUserBody,
    validarUserBody,
    validadJWT,
    validarArrayEmpresa
}