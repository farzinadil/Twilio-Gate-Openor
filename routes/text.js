exports.handler = function(context, event, callback) {
  
    let twiml = new Twilio.twiml.VoiceResponse();
    const client = context.getTwilioClient();
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