const express = require("express");

const { UsersProjectsController } = require("../controllers");

const router = express.router();

router.get("/", UsersProjectsController.browse);
router.get("/:id", UsersProjectsController.read);
router.put("/:id", UsersProjectsController.edit);
router.post("/", UsersProjectsController.add);
router.delete("/:id", UsersProjectsController.delete);

module.exports = router;
