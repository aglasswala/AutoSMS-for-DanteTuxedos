const accountSid = 'YOUR ACCOUNT ID'
const authToken = 'YOUR TOKEN'
const client = require('twilio')(accountSid, authToken)

const nums = ['+120120120111', '+120120120111'] // your numbers 

//sends out text to your number

nums.forEach(function(number) {
	client.messages
		.create({
			body: 'Click here for a small loan of a million dollars',
			from: 'YOUR NUMBER',
			to: number
		})
		.then(message => console.log(message.sid))
		.done();
})

