const Direccion = require('../models/direccion');

const direccionesGet = async (req, res) => {
    const { id } = req.params;
    if (id) {
        const direcciones = await Direccion.findAll({ where: { idUser: id } });
        res.json({data:direcciones});
    }
    else{
        res.json({data:null});
    }
}
const direccionesArrPut = async (req, res) => {

    const { direcciones, idUser } = req.body;
    if (!direcciones || !idUser) {
        console.log("No existen empresas o idUser en el body".yellow);
        res.status(400).json("No existen empresas o idUser en el body");
    }
    else {
        try {
            empresas.forEach(element => {
                element.idUser = idUser;
            });
            const list = await Empresa.bulkCreate(empresas, { validate: true });
            if (list) {
                list.forEach(element => {
                    console.log("Empresa updated con ID: " + element.dataValues.id.toString().green);
                })
                res.json("SUBIDO");
            }
        }
        catch (err) {
            console.log(err);
            res.status(400).json({
                msg: "DataBase problems"
            })
        }
    }

module.exports = {
    direccionesGet
}