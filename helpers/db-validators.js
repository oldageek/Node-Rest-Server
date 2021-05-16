const Role = require('../models/role');
const Usuario = require('../models/usuario');

const esRoleValido = async(rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol ${ rol } no esta en la BD`);
    }
}

// Verificar si el correo eixste
const existeEmail = async(correo = '') => {
    const existeMail = await Usuario.findOne({ correo });
    if (existeMail) {
        throw new Error('Este correo ya esta registrado');
    }
}

// Verificar si existe el id
const existeUsuarioPorId = async(id) => {
    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario) {
        throw new Error(`Este id no existe: ${ id }`);
    }
}

module.exports = {
    esRoleValido,
    existeEmail,
    existeUsuarioPorId
}