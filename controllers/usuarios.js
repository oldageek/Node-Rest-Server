const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {
    const { q, nombre = 'No name', apikey } = req.query;

    res.json({
        msg: 'get API - Controlador',
        q,
        nombre,
        apikey
    });
}

const usuariosPut = (req, res) => {
    // Obtenemos el valor por parametros
    const id = req.query;

    res.json({
        msg: 'put API - Controlador',
        id
    });
}

const usuariosPost = (req, res) => {
    const { nombre, edad } = req.body;

    res.status(201).json({
        msg: 'post API - Controlador',
        nombre,
        edad
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - Controlador'
    });
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'delete API - Controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}