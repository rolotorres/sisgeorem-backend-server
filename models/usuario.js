require('../config/config');

let userModel = {};

// Obtenemos todas los usuarios
userModel.getUsers = (callback) => {
    if (connection) {
        connection.query('SELECT * FROM usuarios', (err, rows) => {
            if (err) {
                throw err;
            } else {
                callback(null, rows);
            }
        })
    }
};


// Insertamos nuevos usuarios
userModel.insertUser = (userData, callback) => {
    if (connection) {
        var sql = `INSERT INTO usuarios SET ?`
        connection.query(sql, userData, (err, result) => {
            if (err) {
                throw err;
            } else {
                callback(null, {
                    ok: true,
                    usuario: userData
                })
            }
        })
    }
}


// Actualizamos personas existentes
userModel.updateUsers = (userData, callback) => {
    if (connection) {
        var sql = `UPDATE usuarios SET
                   id_tipo_usuario = ${connection.escape(userData.id_tipo_usuario)},
                   password = ${connection.escape(userData.password)}
                   WHERE ci_num_persona = ${connection.escape(userData.ci_num_persona)}`

        connection.query(sql, (err, result) => {
            if (err) {
                throw err
            } else {
                callback(null, {
                    ok: true,
                    usuarios: userData
                });
            }
        });
    }
};


// Borramos ciudades
userModel.deleteUsers = (ci_num_persona, callback) => {
    if (connection) {
        var sql = `DELETE FROM usuarios WHERE ci_num_persona = ${ci_num_persona}`;

        connection.query(sql, (err, result) => {
            if (err) {
                throw err;
            } else {
                callback(null, {
                    ok: true,
                    mensaje: 'Usuario eliminado'
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

module.exports = userModel;