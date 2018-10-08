// var express = require('express');

// var app = express();

// // models
// var Usuario = require('../models/usuario');

// app.get('/', (req, res) => {
//     Usuario.getUsers((err, data) => {
//         if (err) {
//             return res.status(500).json({
//                 ok: false,
//                 mensaje: 'Error cargando usuarios',
//                 errors: err
//             });
//         }

//         res.status(200).json({
//             ok: true,
//             usuarios: data
//         });
//     })
// });

// app.post('/', (req, res) => {
//     var body = req.body;

//     var userData = {
//         id_tipo_usuario: body.id_tipo_usuario,
//         ci_num_persona: body.ci_num_persona,
//         username: body.username,
//         password: body.password
//     };

//     console.log(body);

//     Ciudad.insertUser(userData, (err, data) => {

//         if (data) {
//             res.status(201).json({
//                 ok: true,
//                 ciudad: data
//             })
//         } else {
//             return res.status(400).json({
//                 ok: false,
//                 mensaje: 'Error al crear usuario',
//                 errors: err
//             });
//         }
//     })
// });


// module.exports = app;