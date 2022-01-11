/*
Opens gate automatically from 6:00 AM PST to 11:00 PM PST, forwards calls to phone number outside of that time.
Sends SMS message to phone number once gate opens.
*/
exports.handler = function(context, event, callback) {
    let twiml = new Twilio.twiml.VoiceResponse();
  
    let current_time = new Date().getUTCHours();
    //adjust times to your timezone
    const startTime = 14; // 14:00 UTC time = 6:00 PST time
    const endTime = 7; // 7:00 UTC time = 23:00 PST time
    
  
    if ( (current_time >= startTime && current_time <= 23) || (current_time >= 0 && current_time <= endTime) ) {
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
    }
    else{
          let phoneNumber = process.env.PHONE_NUMBER;    
          let dialParams = {};
          twiml.dial(dialParams, phoneNumber);
          return callback(null, twiml);
    }
  
  };