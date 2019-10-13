var express = require('express');
var router = express.Router();
var AWS = require("aws-sdk");
/* GET users listing. */
router.get('/', function(req, res, next) {
    var text = req.query.text;
    var comprehend = new AWS.Comprehend({region:'eu-west-2'});
    comprehend.detectSentiment({"Text":text,"LanguageCode":'en'}, function (err, data) {
        if (err) res.send(err); // an error occurred
        else       res.send(data);           // successful response
    });


});

module.exports = router;
