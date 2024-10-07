
const express = require("express")
const userController = require("../controllers/userController")
const router = express.Router();

router.route("/get").get(userController.get)
router.route("/post").post(userController.post)
router.route("/delete").delete(userController.Delete)
router.route("/update").put(userController.update)


module.exports = router;