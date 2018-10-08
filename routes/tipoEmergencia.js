var express = require('express');

var app = express();

// models
var Tipo = require('../models/tipoEmergencia');

app.get('/', (req, res) => {
    Tipo.getTipo((err, data) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error cargando los tipos de emergencias',
                errors: err
            });
        }

        res.status(200).json({
            ok: true,
            tipos: data
        });
    })
});

app.post('/', (req, res) => {
    var body = req.body;

    var tipoData = {
        descripcion: body.descripcion
    };

    console.log(body);

    Tipo.insertTipo(tipoData, (err, data) => {

        if (data) {
            res.status(201).json({
                ok: true,
                ciudad: data
            })
        } else {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error al crear tipo de emergencia',
                errors: err
            });
        }
    })
});

app.put('/:id_tipo_emergencia', (req, res) => {
    var body = req.body;

    var tipoData = {
        id_tipo_emergencia: req.params.id_tipo_emergencia,
        descripcion: body.descripcion
    };

    Tipo.updateTipo(tipoData, (err, data) => {
        if (data) {
            res.status(201).json({
                ok: true,
                mensaje: 'Datos actualizados correctamente',
                ciudad: data
            })
        } else {
            res.status(400).json({
                ok: false,
                mensaje: 'Error al actualizar los datos',
                errors: err
            })
        }
    })
});

app.delete('/:id_tipo_emergencia', (req, res) => {
    Tipo.deleteTipo(req.params.id_tipo_emergencia, (err, data) => {
        if (data && data.mensaje === 'Tipo de emergencia eliminado' || data.mensaje === 'Ocurrio un error') {
            res.status(201).json({
                ok: true,
                tipo: data
            });
        } else {
            res.status(400).json({
                ok: false,
                mensaje: 'Ocurrio un error al borrar el tipo de emergencia',
                errors: err
            });
        }
    });
});

module.exports = app;