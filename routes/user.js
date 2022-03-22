const express = require("express");
const router = express.Router();
const usersController = require('../controllers/usersController');
const userValidator = require('../validations/userValidator');
const jwtToken = require("../validations/jwtValidation");
router.get('/user', jwtToken.validationToken, userValidator.id, usersController.getUser);
router.get('/users', jwtToken.validationToken, usersController.getUsers);
router.post('/user', jwtToken.validationToken, userValidator.add, usersController.postUser);
router.put('/user', jwtToken.validationToken, userValidator.update, usersController.putUser);
router.post('/login', userValidator.id, usersController.getlogin);
router.delete('/user', jwtToken.validationToken, userValidator.id, usersController.deleteUser);

module.exports = router;
