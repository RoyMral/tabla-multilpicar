const fs = require('fs');
const colors = require("colors");

let listarTabla = function(base, limite) {
    return new Promise(function(resolve, reject) {

        let data = "";

        if (!Number(base) || !Number(limite)) {
            reject(`El valor introducido no es un número`);
            return;
        };

        console.log(`==========================`.green);
        console.log(`===Tabla de ${ base }=====`.green);
        console.log(`==========================`.green);





        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i } \n`;
        }

        resolve(data);
    });
}

let crearArchivo = (base) => {
    return new Promise(function(resolve, reject) {
        let data = "";

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        };

        for (let i = 1; i <= 10; i++) {
            data += `${ base } * ${ i } = ${ base * i } \n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }.txt`);
        });


    });
};

module.exports = {
    crearArchivo,
    listarTabla
};