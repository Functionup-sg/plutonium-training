const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose')
// const UserModel= require("../models/userModel")
const bookModel= require("../models/bookModel")
const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

router.post("/createbook", UserController.createEntryOfBook )

router.get("/getBook", UserController.getBooks)

module.exports = router;