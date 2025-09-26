const express = require("express");


const router = express.Router();

const addUser = require('../controllers/userController');
router.post("/", addUser); // ✅ PAS addUser()



module.exports = router;
