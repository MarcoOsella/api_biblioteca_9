const express = require('express');
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

router.get("/test", (req,res) => {
    res.send("funciona!!!!")
} )

// Ruta para obtener todos los usuarios
router.get('/', usuarioController.getAllUsuarios);

// Ruta para obtener un usuario por su ID
router.get('/:id', usuarioController.getUsuarioById);

// Ruta para crear un nuevo usuario
router.post('/', usuarioController.createUsuario);

// Ruta para actualizar un usuario por su ID
router.put('/:id', usuarioController.updateUsuario);

// Ruta para eliminar un usuario por su ID
router.delete('/:id', usuarioController.deleteUsuario);

module.exports = router;
