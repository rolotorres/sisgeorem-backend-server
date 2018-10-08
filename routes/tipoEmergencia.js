// var express = require('express');

// var app = express();

// // models
// var Tipo = require('../models/tipoEmergencia');

// app.get('/', (req, res) => {
//     Tipo.getTipo((err, data) => {
//         if (err) {
//             return res.status(500).json({
//                 ok: false,
//                 mensaje: 'Error cargando los tipos de emergencias',
//                 errors: err
//             });
//         }

//         res.status(200).json({
//             ok: true,
//             tipos: data
//         });
//     })
// });

// module.exports = app;