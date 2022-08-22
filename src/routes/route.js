const express = require('express');
const router = express.Router();
const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController=require("../controllers/publisherController")

router.post("/createAuthor", authorController.createAuthor)
router.post("/createpublisher",publisherController.createPublisher)
router.post("/createBook",bookController.createBook)
router.get("/getBookWithAuthor_Public_Details",bookController.getBookWithAuthor_Public_Details)
router.get("/getBookWithAuthorDetails",bookController.getBooksWithAuthorDetails)
router.get("/getAuthorsData", authorController.getAuthorData)
router.get("/getBookData",bookController.getBooksData)

router.put("/updateIsHardCover",bookController.updateIsHardCover)
router.put("/authorRating",bookController.authorRating)



module.exports = router;
