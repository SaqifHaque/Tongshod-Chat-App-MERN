const TWILIO_SID = process.env.SMS_SID;
const TWILIO_TOKEN = process.env.SMS_AUTH_TOKEN;


const twilio = () => {
    const twilio = require('twilio')(TWILIO_SID, TWILIO_TOKEN, {
        lazyLoading: true
    })
    return twilio
}

module.exports = twilio;



