var express = require('express');

var app = express();

// models
var Ciudad = require('../models/ciudad');

app.get('/', (req, res) => {
    Ciudad.getCity((err, data) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error cargando ciudades',
                errors: err
            });
        }

        res.status(200).json({
            ok: true,
            ciudades: data
        });
    })
});

app.post('/', (req, res) => {
    var body = req.body;

    var cityData = {
        descripcion: body.descripcion
    };

    console.log(body);

    Ciudad.insertCity(cityData, (err, data) => {

        if (data) {
            res.status(201).json({
                ok: true,
                ciudad: data
            });
        } else {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error al crear ciudad',
                errors: err
            });
        }
    })
});

app.put('/:id_ciudad', (req, res) => {
    var body = req.body;

    var cityData = {
        id_ciudad: req.params.id_ciudad,
        descripcion: body.descripcion
    };

    Ciudad.updateCity(cityData, (err, data) => {
        if (data) {
            res.status(200).json({
                ok: true,
                mensaje: 'Datos de la ciudad actualizados correctamente',
                ciudad: data
            })
        } else {
            res.status(400).json({
                ok: false,
                mensaje: 'Error al actualizar los datos de la ciudad',
                errors: err
            })
        }
    })
});

app.delete('/:id_ciudad', (req, res) => {
    Ciudad.deleteCity(req.params.id_ciudad, (err, data) => {
        if (data && data.mensaje === 'Ciudad eliminada' || data.mensaje === 'Ocurrio un error') {
            res.status(200).json({
                ok: true,
                ciudad: data
            });
        } else {
            res.status(400).json({
                ok: false,
                mensaje: 'Ocurrio un error al borrar la ciudad',
                errors: err
            });
        }
    });
});

module.exports = app;