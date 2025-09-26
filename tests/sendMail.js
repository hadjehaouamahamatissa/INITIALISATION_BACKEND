const transporter = require("../untils/mailerTransporter");

transporter.sendMail ({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "Test envoye de mail",
    text: "Ceci est un test d'envoi de mail",
})

// console.log(typeof transporter.sendMail); 

