require('../config/config');

let tipoModel = {};

// Obtenemos todas las personas
tipoModel.getTipo = (callback) => {
    if (connection) {
        connection.query('SELECT * FROM tipo_emergencia', (err, rows) => {
            if (err) {
                throw err;
            } else {
                callback(null, rows);
            }
        })
    }
};


// Insertamos nuevas ciudades
tipoModel.insertTipo = (tipoData, callback) => {
    if (connection) {
        var sql = `INSERT INTO tipo_emergencia SET ?`
        connection.query(sql, tipoData, (err, result) => {
            if (err) {
                throw err;
            } else {
                callback(null, {
                    ok: true,
                    tipo: tipoData
                })
            }
        })
    }
}


// Actualizamos personas existentes
tipoModel.updateTipo = (tipoData, callback) => {
    if (connection) {
        var sql = `UPDATE tipo_emergencia SET
                   descripcion = ${connection.escape(tipoData.descripcion)}
                   WHERE id_tipo_emergencia = ${connection.escape(tipoData.id_tipo_emergencia)}`

        connection.query(sql, (err, result) => {
            if (err) {
                throw err
            } else {
                callback(null, {
                    ok: true,
                    tipo: tipoData
                });
            }
        });
    }
};


// Borramos tipos de emergencias
tipoModel.deleteTipo = (id_tipo_emergencia, callback) => {
    if (connection) {
        var sql = `DELETE FROM tipo_emergencia WHERE id_tipo_emergencia = ${id_tipo_emergencia}`;

        connection.query(sql, (err, result) => {
            if (err) {
                throw err;
            } else {
                callback(null, {
                    ok: true,
                    mensaje: 'Tipo de emergencia eliminado'
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

module.exports = tipoModel;