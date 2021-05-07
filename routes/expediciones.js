const { Router, request } = require('express');
const {
    expedicionesGet,
    expedicionesPost,
    expedicionesPut,
    expedicionesDelete
} = require('../controllers/expediciones')

const router = Router();

router.get('/:id', expedicionesGet);
router.post('/:id', expedicionesPost);
router.put('/:id', expedicionesPut);
router.delete('/:id', expedicionesDelete);

module.exports = router;