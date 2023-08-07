const Usuario = require('../models/usuarioModel');

// Controlador para obtener todos los usuarios
async function getAllUsuarios(req, res) {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Controlador para obtener un usuario por su ID
async function getUsuarioById(req, res) {
  const id = req.params.id;
  try {
    const usuario = await Usuario.findById(id);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(usuario);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Controlador para crear un nuevo usuario
async function createUsuario(req, res) {
  const { nombre, edad } = req.body;
  const usuario = new Usuario({ nombre, edad });

  try {
    const nuevoUsuario = await usuario.save();
    res.status(201).json(nuevoUsuario);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

// Controlador para actualizar un usuario por su ID
async function updateUsuario(req, res) {
  const id = req.params.id;
  const { nombre, edad } = req.body;

  try {
    const usuarioActualizado = await Usuario.findByIdAndUpdate(
      id,
      { nombre, edad },
      { new: true }
    );
    if (!usuarioActualizado) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(usuarioActualizado);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

// Controlador para eliminar un usuario por su ID
async function deleteUsuario(req, res) {
  const id = req.params.id;
  try {
    const usuarioEliminado = await Usuario.findByIdAndRemove(id);
    if (!usuarioEliminado) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json({ message: 'Usuario eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  getAllUsuarios,
  getUsuarioById,
  createUsuario,
  updateUsuario,
  deleteUsuario,
};
