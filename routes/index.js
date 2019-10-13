var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var text = req.query.text;
  var comprehend = new AWS.Comprehend({region:'eu-west-2'});
  comprehend.detectSentiment({"Text":text,"LanguageCode":'en'}, function (err, data) {
    if (err) res.send(err); // an error occurred
    else       {console.log(data),res.send("Success"); }           // successful response
  });
});

module.exports = router;
