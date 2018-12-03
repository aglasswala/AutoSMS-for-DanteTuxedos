const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse

// Server for receiving replies and sending back a message

const app = express();

app.post('/sms', (req, res) => {
	const twiml = new MessagingResponse();

	twiml.message('you know what to do');

	res.writeHead(200, {'Content-Type': 'text/xml'});
	res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
	console.log('Express server listening on port 1337');
});