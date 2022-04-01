const express = require("express");
const userController = require("../controllers/userController")
const router = express.Router();

router.get('/allUser',userController.allUser)
router.delete('/:id/delete',userController.deleteUser)

module.exports = router;
