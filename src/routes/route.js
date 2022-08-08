const express = require('express');
const ExternalModule = require('../logger/logger')
const ExternalModule1 = require('../util/helper')
const ExternalModule2 = require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My second ever api!')
    ExternalModule.welcome()
    ExternalModule1.printDate()
    ExternalModule1.printMonth()
    ExternalModule1.getBatchInfo()
    ExternalModule2.trimFun()
    ExternalModule2.changetoLowerCase()
    ExternalModule2.changeToUpperCase()

});


module.exports = router;
// adding this comment for no reason