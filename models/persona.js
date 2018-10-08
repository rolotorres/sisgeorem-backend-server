require('../config/config');

let persModel = {};

// Obtenemos todas las personas
persModel.getPers = (callback) => {
    if (connection) {
        connection.query('SELECT * FROM persona', (err, rows) => {
            if (err) {
                throw err;
            } else {
                callback(null, rows);
            }
        })
    }
};


// Insertamos nuevas personas
persModel.insertPers = (persData, callback) => {
    if (connection) {
        var sql = `INSERT INTO persona SET ?`
        connection.query(sql, persData, (err, result) => {
            if (err) {
                throw err;
            } else {
                callback(null, {
                    ok: true,
                    persona: persData
                })
            }
        })
    }
}


// Actualizamos personas existentes
persModel.updatePers = (persData, callback) => {
    if (connection) {
        var sql = `UPDATE persona SET
                   nombre = ${connection.escape(persData.nombre)},
                   apellido = ${connection.escape(persData.apellido)},
                   sexo = ${connection.escape(persData.sexo)},
                   fecha_nac = ${connection.escape(persData.fecha_nac)},
                   lugar_de_nac = ${connection.escape(persData.lugar_de_nac)},
                   estado_civil = ${connection.escape(persData.estado_civil)},
                   direccion = ${connection.escape(persData.direccion)},
                   telefono = ${connection.escape(persData.telefono)},
                   email = ${connection.escape(persData.email)}
                   WHERE ci_num_persona = ${connection.escape(persData.ci_num_persona)}`

        connection.query(sql, (err, result) => {
            if (err) {
                throw err
            } else {
                callback(null, {
                    ok: true,
                    persona: persData
                });
            }
        });
    }
};


// Borramos una persona
persModel.deletePers = (ci_num_persona, callback) => {
    if (connection) {
        var sql = `DELETE FROM persona WHERE ci_num_persona = ${ci_num_persona}`;

        connection.query(sql, (err, result) => {
            if (err) {
                throw err;
            } else {
                callback(null, {
                    ok: true,
                    mensaje: 'Persona eliminada'
                });
            }
        });
    } else {
        callback(null, {
            ok: false,
            mensaje: 'Ocurrio un error'
        });
    }
};

module.exports = persModel;