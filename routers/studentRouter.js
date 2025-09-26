const express = require('express');
const router = express.Router();

// Import du contrôleur (à créer dans src/controllers/studentController.js)
const {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent
} = require('../controllers/studentController');

// Route POST : Ajouter un étudiant
router.post('/', createStudent);

// Route GET : Récupérer tous les étudiants
router.get('/', getAllStudents);

// Route GET : Récupérer un étudiant par ID
router.get('/:id', getStudentById);

// Route PUT : Mettre à jour un étudiant
router.put('/:id', updateStudent);

// Route DELETE : Supprimer un étudiant
router.delete('/:id', deleteStudent);

module.exports = router;
