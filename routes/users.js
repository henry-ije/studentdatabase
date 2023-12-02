var express = require('express');
var router = express.Router();
const {usersController} = require("../controllers/users")

//Create a new record
router.post("/", usersController.create)
/* GET users listing. */
router.get('/', usersController.getAll);

router.get('/:id', usersController.getById);

//Update Users by ID
router.put('/:id', usersController.update);

//Delete Users by ID
router.delete('/:id', usersController.delete);

module.exports = router;
