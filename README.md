# TADHack London
## RabbitDesk.AI is for reducing average-time-to-hire for employeers using natural language processing

![RabbitDesk.AI](https://dominiconorton-images.s3-eu-west-1.amazonaws.com/TADHackLondon.jpg)

TADHack Global is a hackathon that helps people learn about the latest Internet, IT, and Telecoms technologies; and use those technologies to solve problems that matter. For the 2019 TADHack London competition, RabbitDesk.AI wanted to reduce the average-time-to-hire for companies from 25 days to 5 days. Our attempt is to reduce average-time-to-hire, improve candidate experience and save money for Employeers. 

We achieved this by creating a voice chat bot that analyzes the applicants resume and interviews the applicant on behalf on the employeer. We use natural language processing to personalize the conversation. We then used AWS comprehend to analyze then conversation that will futher filter the candidate with assistance of the employeer. As a prerequisite of the competition we used SimWood webhooks to authenticate redirect the applicants call to the appropreiate Twilio conversational bot.

## Getting Started

### Prerequisites

+ Twilio Phone Number
+ Amazon Comprehend Instance 
+ Simwood Phone Number
+ Basic Node JS & Javascript knowledge

To set this up, you need a developer account on SimWood. this repository https://github.com/ImmanuelBaskaran/TadhackSentimentCode which contains the code for the server which connects with AWS, A twillio bot.

https://github.com/ImmanuelBaskaran/TadhackSentimentCode
The server was written in using Express JS, The server takes a post request from SimWood, signalling the call has ended and that it should fetch the transcript from Twillio. The server should then process the received text from Twillio and then sends it to AWS. AWS sends back the sentiment score and Topics and those are then stored for further processing.

## Credits

## Contributions 

## Feedback

## License

