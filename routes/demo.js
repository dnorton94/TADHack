var express = require('express');
var router = express.Router();
var AWS = require("aws-sdk");
/* GET users listing. */
router.post('/', function(req, res, next) {
    console.log(req.body);
        var text = "Bot\n" +
            "Good Morning {Name}, You’ll be  pleased to know you’ve been selected for the second round of interviews for the junior software developer role at Apple. Before we proceed further, I would like you to know that this interview is being recorded and will be used for your assessment and helping interview training. When you’re ready to start please say start.Applicant\n" +
            "StartBot\n" +
            "Supriya can you define yourself in two sentences.Applicant\n" +
            "I'm a physicist who turned into an entrepreneur. I'm looking for opportunities to grow and translate ideas into a product as a product manager.Bot\n" +
            "That’s amazing Supriya!Bot\n" +
            "Can you tell us more about what you love Physics?Applicant\n" +
            "Physics has always intrigued me as to how few fundamental laws govern everything from atoms to galaxies. It is fascinating to find an explanation for every physical phenomenon.Bot\n" +
            "On your resume you said you’re skilled in Python. Why do you prefer Python as a language?Applicant\n" +
            "I prefer python as it is easiest to understand high-level language and has the flexibility to do simple to complex projects. On top of it, you can get lot of libraries to do computation and processing on embedded systems, apart from device mesh.Bot\n" +
            "It seems you attended University College London. What were you favourite courses at University College London and why?Applicant\n" +
            "I studied MSc Entrepreneurship at University College London. I found marketing and finance particularly useful as they helped understand the KPI's a business should chase in order to offer a better value proposition to the customer and return on investment to investor.Bot\n" +
            "You have some interesting experience with University College London. What we’re the toughest challenges while working at University College London.Applicant\n" +
            "I have had an amazing time at UCL, being involved in different marketing projects. Every project involved engaging and getting traction from real customers. Overcoming the fear of rejection was the biggest learning throughout the course.Bot\n" +
            "Thank You Dominic for interviewing for the Junior Software Developer Role at Apple. You will receive a notification in a couple minutes to discover if you have been to the behavioural assessment interview in our London office.";
        var comprehend = new AWS.Comprehend({region: 'eu-west-2'});
        comprehend.detectSentiment({"Text": text, "LanguageCode": 'en'}, function (err, data) {
            if (err) res.send(err); // an error occurred
            else {
                console.log(data);
                res.send(data);
            }           // successful response
        });


});

module.exports = router;
