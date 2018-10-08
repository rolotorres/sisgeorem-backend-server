require('../config/config');

let userModel = {};

// Obtenemos todas las personas
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

// Insertamos nuevas personas
userModel.insertPers = (persData, callback) => {
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

module.exports = userModel;