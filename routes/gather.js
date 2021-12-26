exports.handler = function(context, event, callback) {
	let twiml = new Twilio.twiml.VoiceResponse();
  if (event.Digits == context.PASSCODE ){
    twiml.play({
                digits: 'wwww9'
            });
    twiml.pause();
    twiml.say("Welcome In");
    twiml.redirect('/text')
  }
  else{
    twiml.say("Sorry, You Have the wrong code");
    twiml.redirect('/call')
  }
  
 
  return callback(null, twiml);
};