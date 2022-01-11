/*
Opens gate automatically.
Sends SMS message to phone number once gate opens.
*/
exports.handler = function(context, event, callback) {
    let twiml = new Twilio.twiml.VoiceResponse();
  
    // Play DTMF Tone 9
    twiml.play({
        digits: 'wwww9'
    });
    // Play Welcomre Message
    twiml.say("Welcome In");
    // Create an authenticated Twilio Client instance
    const client = context.getTwilioClient();

    // Send a text message once the gate has opened
    client.messages.create({
        body: 'Gate Opened',
        to: process.env.PHONE_NUMBER,  // your phone number
        from: process.env.TWILIO_NUMBER // a valid Twilio number
    })
        .then((message) => {
            // Success, return message SID
            return callback(null, twiml);
        })
        .catch((e) => {
                // Error, return error object
            return callback(null, twiml);
        });

  
  };