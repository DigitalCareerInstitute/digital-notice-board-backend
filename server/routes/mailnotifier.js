const api_key = 'key-379b68066eb6e2926eec20fdb0412c55';
const DOMAIN = 'sandbox04602f391f554ad29b7caff0d3ec68c3.mailgun.org';
const mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});

function sendMail(recipientAddress, subject, text){
	const data = {
		from: 'Excited User <norepley@gmail.com>',
		to: recipientAddress,
		subject: subject,
		text: text
	};

	mailgun.messages().send(data, function (error, body) {
		console.log(error)
	console.log('this the mail',body);
	})
}
module.exports.sendMail = sendMail;
