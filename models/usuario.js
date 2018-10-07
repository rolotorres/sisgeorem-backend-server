require('../config/config');

let userModel = {};

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

module.exports = userModel;