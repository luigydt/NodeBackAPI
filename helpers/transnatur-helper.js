

 function crearRefTransnatur(idEmpresa, count) {

    let tam = 9;
    tam = 9 - count.toString().length;    
    let num = idEmpresa;
    for (let i = 0; i < tam; i++)
        num = num +'0'
    num = num + count    
    return num;
}

module.exports = {

    crearRefTransnatur
}