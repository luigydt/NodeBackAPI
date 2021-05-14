const { Router, request } = require('express');
const {
    expedicionesGet,
    expedicionesPost,
    expedicionesPut,
    expedicionesDelete
} = require('../controllers/expediciones')

const { validarIdExpedicion,
    validarQueryExpedicion,
    validarIdUser,
    validadJWT,
    validarIDToken

} = require('../middlewares/index');

const router = Router();

router.get('/:id', [
    validadJWT,
    validarIdUser,
    validarIDToken,
    validarQueryExpedicion
], expedicionesGet);

router.post('/:id', [
    
    validarIdUser,
    validarIDToken,
    validarIdExpedicion
], expedicionesPost);

router.put('/:id', [
    validadJWT,
    validarIdUser,
    validarIDToken,
    validarQueryExpedicion
], expedicionesPut);

router.delete('/:id', [
    validadJWT,
    validarIdUser,
    validarIDToken,
    validarIdExpedicion
], expedicionesDelete);

module.exports = router;