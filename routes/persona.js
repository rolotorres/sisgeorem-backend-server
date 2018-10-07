var express = require('express');

var app = express();

// models
var Persona = require('../models/persona');

app.get('/', (req, res) => {
    Persona.getPers((err, data) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error cargando personas',
                errors: err
            });
        }

        res.status(200).json({
            ok: true,
            personas: data
        });
    })
});

app.post('/', (req, res) => {
    var body = req.body;

    var persData = {
        ci_num_persona: body.ci_num_persona,
        nombre: body.nombre,
        apellido: body.apellido,
        sexo: body.sexo,
        fecha_nac: body.fecha_nac,
        lugar_de_nac: body.lugar_de_nac,
        estado_civil: body.estado_civil,
        direccion: body.direccion,
        telefono: body.telefono,
        email: body.email
    };

    console.log(body);

    Persona.insertPers(persData, (err, data) => {

        if (data) {
            res.status(201).json({
                ok: true,
                persona: data
            })
        } else {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error al crear persona',
                errors: err
            });
        }
    })
});

app.put('/:ci_num_persona', (req, res) => {
    var body = req.body;

    var persData = {
        ci_num_persona: req.params.ci_num_persona,
        nombre: body.nombre,
        apellido: body.apellido,
        sexo: body.sexo,
        fecha_nac: body.fecha_nac,
        lugar_de_nac: body.lugar_de_nac,
        estado_civil: body.estado_civil,
        direccion: body.direccion,
        telefono: body.telefono,
        email: body.email
    };

    Persona.updatePers(persData, (err, data) => {
        if (data) {
            res.status(201).json({
                ok: true,
                mensaje: 'Datos de la persona actualizados correctamente',
                persona: data
            })
        } else {
            res.status(400).json({
                ok: false,
                mensaje: 'Error al actualizar los datos de la persona',
                errors: err
            })
        }
    })
});

app.delete('/:ci_num_persona', (req, res) => {
    Persona.deletePers(req.params.ci_num_persona, (err, data) => {
        if (data && data.mensaje === 'Persona eliminada' || data.mensaje === 'Ocurrio un error') {
            res.status(201).json({
                ok: true,
                persona: data
            });
        } else {
            res.status(400).json({
                ok: false,
                mensaje: 'Ocurrio un error al borrar la persona',
                errors: err
            });
        }
    });
});

module.exports = app;