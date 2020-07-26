"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.send("\n    <div style=\"text-align: center; min-height: 100vh; background:blue\">\n    <h1>Bigin Aimart</h1>\n    <a href=\"https://aimartrealtors.com/\">\n    <img src=\"https://aimartrealtors.com/wp-content/uploads/2020/01/aimartrealtorslogo1.png\" alt=\"logo\">\n</a>\n</div>\n");
});
app.get('*', function (req, res) {
    res.status(400).send("<h1 style='font-size: 40px font-weight: bolder; text-align: center; color: red;'> Oopps..!! Request Unauthorized!!  [Error 400 or 404].</h1>");
});
app.post('*', function (req, res) {
    res.status(400).send("Oopps..!! Request Unauthorized!!  [Error 400 or 404].");
});
app.put('*', function (req, res) {
    res.status(400).send("Oopps..!! Request Unauthorized!!  [Error 400 or 404].");
});
app.delete('*', function (req, res) {
    res.status(400).send("Oopps..!! Request Unauthorized!!  [Error 400 or 404].");
});
app.patch('*', function (req, res) {
    res.status(400).send("Oopps..!! Request Unauthorized!!  [Error 400 or 404].");
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
