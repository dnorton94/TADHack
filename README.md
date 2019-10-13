# TADHack

TADHack Global is a hackathon that helps people learn about the latest Internet, IT, and Telecoms technologies; and use those technologies to solve problems that matter.

## Installation

To set this up, you need a developer account on SimWood. this repository https://github.com/ImmanuelBaskaran/TadhackSentimentCode which contains the code for the server which connects with AWS, A twillio bot.

https://github.com/ImmanuelBaskaran/TadhackSentimentCode
The server was written in using Express JS, The server takes a post request from SimWood, signalling the call has ended and that it should fetch the transcript from Twillio. The server should then process the received text from Twillio and then sends it to AWS. AWS sends back the sentiment score and Topics and those are then stored for further processing.

## Contributions 

