var express = require('express');

var app = express();

// models
var Usuario = require('../models/usuario');

app.get('/', (req, res) => {
    Usuario.getUsers((err, data) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error cargando usuarios',
                errors: err
            });
        }

        res.status(200).json({
            ok: true,
            usuarios: data
        });
    })
});

module.exports = app;