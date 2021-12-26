exports.handler = function(context, event, callback) {
	let twiml = new Twilio.twiml.VoiceResponse();
    
  const gather = twiml.gather({
    numDigits: 3,
    action: '/gather',
    timeout: 10
  }).say('Enter the Gate Code');
  

  return callback(null, twiml);
};