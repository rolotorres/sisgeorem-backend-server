var express = require('express');
var bcrypt = require('bcryptjs');

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

app.post('/', (req, res) => {
    var body = req.body;

    var userData = {
        id_usuario: null,
        id_tipo_usuario: body.id_tipo_usuario,
        ci_num_persona: body.ci_num_persona,
        username: body.username,
        password: bcrypt.hashSync(body.password, 10),

    };

    console.log(body);

    Usuario.insertUser(userData, (err, data) => {

        if (data) {
            res.status(201).json({
                ok: true,
                ciudad: data
            })
        } else {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error al crear usuario',
                errors: err
            });
        }
    })
});

app.put('/:ci_num_persona', (req, res) => {
    var body = req.body;

    var userData = {
        ci_num_persona: req.params.ci_num_persona,
        id_tipo_usuario: body.id_tipo_usuario,
        password: bcrypt.hashSync(body.password, 10)
    };

    Usuario.updateUsers(userData, (err, data) => {
        if (data) {
            res.status(200).json({
                ok: true,
                mensaje: 'Datos del usuario actualizados correctamente',
                persona: data
            })
        } else {
            res.status(400).json({
                ok: false,
                mensaje: 'Error al actualizar los datos del usuario',
                errors: err
            })
        }
    })
});

app.delete('/:ci_num_persona', (req, res) => {
    Usuario.deleteUsers(req.params.ci_num_persona, (err, data) => {
        if (data && data.mensaje === 'Usuario eliminado' || data.mensaje === 'Ocurrio un error') {
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