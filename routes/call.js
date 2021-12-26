exports.handler = function(context, event, callback) {
	let twiml = new Twilio.twiml.VoiceResponse();
  
  let phoneNumber = process.env.PHONE_NUMBER;    
  let dialParams = {};
  twiml.dial(dialParams, phoneNumber);

  return callback(null, twiml);
};