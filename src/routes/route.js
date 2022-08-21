const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")


router.post("/createAuthor", BookController.createAuthor  )

router.post("/createBook", BookController.createBook)

router.get("/getBooksOfChetanBhagat", BookController.getBooksOfChetanBhagat  )

router.get("/authorOfBook", BookController.authorOfBook)

router.get("/booksBetween50_100", BookController.booksBetween50_100) 



module.exports = router;