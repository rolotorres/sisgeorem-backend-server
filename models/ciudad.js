require('../config/config');

let cityModel = {};

// Obtenemos todas las personas
cityModel.getCity = (callback) => {
    if (connection) {
        connection.query('SELECT * FROM ciudad', (err, rows) => {
            if (err) {
                throw err;
            } else {
                callback(null, rows);
            }
        })
    }
};


// Insertamos nuevas ciudades
cityModel.insertCity = (cityData, callback) => {
    if (connection) {
        var sql = `INSERT INTO ciudad SET ?`
        connection.query(sql, cityData, (err, result) => {
            if (err) {
                throw err;
            } else {
                callback(null, {
                    ok: true,
                    ciudad: cityData
                })
            }
        })
    }
}


// Actualizamos personas existentes
cityModel.updateCity = (cityData, callback) => {
    if (connection) {
        var sql = `UPDATE ciudad SET
                   descripcion = ${connection.escape(cityData.descripcion)}
                   WHERE id_ciudad = ${connection.escape(cityData.id_ciudad)}`

        connection.query(sql, (err, result) => {
            if (err) {
                throw err
            } else {
                callback(null, {
                    ok: true,
                    ciudad: cityData
                });
            }
        });
    }
};


// Desactivamos personas
cityModel.deleteCity = (id_ciudad, callback) => {
    if (connection) {
        var sql = `DELETE FROM ciudad WHERE id_ciudad = ${id_ciudad}`;

        connection.query(sql, (err, result) => {
            if (err) {
                throw err;
            } else {
                callback(null, {
                    ok: true,
                    mensaje: 'Ciudad eliminada'
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

module.exports = cityModel;