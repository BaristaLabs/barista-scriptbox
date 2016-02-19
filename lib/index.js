"use strict";

var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
    res.send('Hello World!');
});

module.exports = router;

//TODO: Where to start a daemon..??