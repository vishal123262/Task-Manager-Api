const sgMail = require('@sendgrid/mail') 

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email , name) => {
   sgMail.send({
       to:email,
       from:'vishalmodani8@gmail.com',
       subject:'Thanks for joining in',
       text:`Welcome to the app. ${name} . Let me know how you get along the app!`
   })
}

const sendCancellationEmail = (email , name) => {
    sgMail.send({
        to:email,
        from:'vishalmodani8@gmail.com',
        subject:'Sorry To See You',
        text:`GoodBye ${name} , hope To See You Soon Sometime!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}