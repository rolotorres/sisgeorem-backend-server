require('../config/config');

let rolModel = {};

// Obtenemos todos los roles
rolModel.getRol = (callback) => {
    if (connection) {
        connection.query('SELECT * FROM tipo_usuario', (err, rows) => {
            if (err) {
                throw err;
            } else {
                callback(null, rows);
            }
        })
    }
};


// Insertamos nuevos roles
rolModel.insertRol = (rolData, callback) => {
    if (connection) {
        var sql = `INSERT INTO tipo_usuario SET ?`
        connection.query(sql, rolData, (err, result) => {
            if (err) {
                throw err;
            } else {
                callback(null, {
                    ok: true,
                    rol: rolData
                })
            }
        })
    }
}


// Actualizamos roles existentes
rolModel.updateRol = (rolData, callback) => {
    if (connection) {
        var sql = `UPDATE tipo_usuario SET
                   categoria = ${connection.escape(rolData.categoria)},
                   descripcion = ${connection.escape(rolData.descripcion)}
                   WHERE id_tipo_usuario = ${connection.escape(rolData.id_tipo_usuario)}`

        connection.query(sql, (err, result) => {
            if (err) {
                throw err
            } else {
                callback(null, {
                    ok: true,
                    rol: rolData
                });
            }
        });
    }
};

// Borramos roles
rolModel.deleteRol = (id_tipo_usuario, callback) => {
    if (connection) {
        var sql = `DELETE FROM tipo_usuario WHERE id_tipo_usuario = ${id_tipo_usuario}`;

        connection.query(sql, (err, result) => {
            if (err) {
                throw err;
            } else {
                callback(null, {
                    ok: true,
                    mensaje: 'Rol eliminado'
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

module.exports = rolModel;