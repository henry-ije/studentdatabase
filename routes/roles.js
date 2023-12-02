var express = require("express")
var router = express.Router();
const {rolesController} = require("../controllers/roles")

//CREATE a new record
router.post("/", rolesController.create)

//GET roles listing
router.get("/", rolesController.getAll)

//GET user by ID
router.get("/:id", rolesController.getById)

//UPDATE record by ID
router.put("/:id", rolesController.update)

//DELETE record by ID
router.delete('/:id', rolesController.delete);

module.exports = router;