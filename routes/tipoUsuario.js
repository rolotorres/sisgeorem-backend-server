var express = require('express');

var app = express();

// models
var Rol = require('../models/tipoUsuario');

app.get('/', (req, res) => {
    Rol.getRol((err, data) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error cargando los tipos de usuarios',
                errors: err
            });
        }

        res.status(200).json({
            ok: true,
            rol: data
        });
    })
});

app.post('/', (req, res) => {
    var body = req.body;

    var rolData = {
        id_tipo_usuario: body.id_tipo_usuario,
        categoria: body.categoria,
        descripcion: body.descripcion
    };

    console.log(body);

    Rol.insertRol(rolData, (err, data) => {

        if (data) {
            res.status(201).json({
                ok: true,
                rol: data
            })
        } else {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error al crear rol',
                errors: err
            });
        }
    });
});

app.put('/:id_tipo_usuario', (req, res) => {
    var body = req.body;

    var rolData = {
        id_tipo_usuario: req.params.id_tipo_usuario,
        categoria: body.categoria,
        descripcion: body.descripcion
    };

    Rol.updateRol(rolData, (err, data) => {
        if (data) {
            res.status(201).json({
                ok: true,
                mensaje: 'Rol actualizado correctamente',
                ciudad: data
            })
        } else {
            res.status(400).json({
                ok: false,
                mensaje: 'Error al actualizar el rol',
                errors: err
            })
        }
    })
});

app.delete('/:id_tipo_usuario', (req, res) => {
    Rol.deleteRol(req.params.id_tipo_usuario, (err, data) => {
        if (data && data.mensaje === 'Rol eliminado' || data.mensaje === 'Ocurrio un error') {
            res.status(201).json({
                ok: true,
                ciudad: data
            });
        } else {
            res.status(400).json({
                ok: false,
                mensaje: 'Ocurrio un error al borrar el rol',
                errors: err
            });
        }
    });
});

module.exports = app;