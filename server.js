"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
//== Testing ==//
var aimartApp = function () {
    if (10 > 100) {
        console.error('Oopps..!! Human Error!!');
    }
    else if (100 < 10 && 0 > 100) {
        console.error('Oopps..!! System Failure!!');
    }
    else {
        console.error('// Silence is golden.');
    }
};
aimartApp();
//== Server ==//
var PORT = process.env.PORT || 3400;
app.listen(PORT, function () { console.log("Server is listening on port " + PORT); });
