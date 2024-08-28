var express = require('express');
var router = express.Router();
const usersController = require("../controllers/users");

/* GET users listing. */
router.get('/', usersController.index);
router.post('/', usersController.createUser);
router.post('/login',usersController.login);

module.exports = router;
