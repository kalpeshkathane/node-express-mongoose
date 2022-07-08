var express = require("express");
const projectController = require("../controllers/projectController");
const auth = require("../middleware/auth");

var router = express.Router();

router.get("/", auth, projectController.getProjects);

router.get("/:id", auth, projectController.getProjectsById);

router.post("/add", auth, projectController.addProjects);

router.put("/update/:id", auth, projectController.updateProjects);

router.delete("/delete/:id", auth, projectController.deleteProjects);

module.exports = router;
