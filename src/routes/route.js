const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const mid=require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)
router.post("/login", userController.loginUser)
router.get("/users/:userId",mid.headerCheck, mid.userCheck, mid.checkLoginUser, userController.getUserData)
router.put("/users/:userId",mid.headerCheck, mid.userCheck, mid.checkLoginUser, userController.updateUser)
router.delete("/users/:userId",mid.headerCheck, mid.userCheck, mid.checkLoginUser, userController.deleteUser)
  

module.exports = router;