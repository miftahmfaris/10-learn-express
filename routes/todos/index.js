const router = require("express").Router();
const controller = require("./controller.js");

router.get("/", controller.getAll);
router.get("/:name", controller.getById);
router.post("/", controller.create);

module.exports = router;
