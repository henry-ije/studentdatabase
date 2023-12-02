var express = require("express")
var router = express.Router();
const {studentsController} = require("../controllers/students")

//CREATE a new record
router.post("/", studentsController.create)

//GET roles listing
router.get("/", studentsController.getAll)

//GET user by ID
router.get("/:id", studentsController.getById)

//UPDATE record by ID
router.put("/:id", studentsController.update)

//DELETE record by ID
router.delete('/:id', studentsController.delete);

module.exports = router;