require('dotenv').config();
var cron = require('node-cron');


const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

function send_message(){
    client.messages
        .create({
            body: '************',
            from: process.env.MY_TWILIO_NUMBER,
            to: process.env.MY_NUMBER
        })
        .then(message => console.log(message.sid));
};


    
cron.schedule('*/2 * * * *', function(){
    send_message();
    console.log('code ran');
});