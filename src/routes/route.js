const express = require('express');
const router = express.Router();
const authorBook= require("../controllers/authorBook")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorBook.createAuthor)

router.post("/createBook", authorBook.createBook)

router.get("/findBook",authorBook.findBook)

router.get('/findAuthorUpdate',authorBook.findAuthorAndUpdate)

router.get('/findBookAuthor',authorBook.findBookAuthor)

module.exports = router;