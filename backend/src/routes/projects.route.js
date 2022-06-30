const express = require("express");

const { ProjectsController } = require("../controllers");

const router = express.Router();

router.get("/", ProjectsController.browse);
router.get("/:id", ProjectsController.read);
router.put("/:id", ProjectsController.edit);
// router.post("/", ProjectsController.add);
router.delete("/:id", ProjectsController.delete);

module.exports = router;
