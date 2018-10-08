// require('../config/config');

// let userModel = {};

// // Obtenemos todas los usuarios
// userModel.getUsers = (callback) => {
//     if (connection) {
//         connection.query('SELECT * FROM usuarios', (err, rows) => {
//             if (err) {
//                 throw err;
//             } else {
//                 callback(null, rows);
//             }
//         })
//     }
// };


// // Insertamos nuevos usuarios
// userModel.insertUser = (userData, callback) => {
//     if (connection) {
//         var sql = `INSERT INTO usuario SET ?`
//         connection.query(sql, userData, (err, result) => {
//             if (err) {
//                 throw err;
//             } else {
//                 callback(null, {
//                     ok: true,
//                     usuario: userData
//                 })
//             }
//         })
//     }
// }

// module.exports = userModel;