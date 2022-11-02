const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user: "sujayjangam123@gmail.com",
        pass: "bgjnskfhirutitiz"
    }
});

const options = {
    from: "sujayjangam123@gmail.com",
    to: "s180469@rguktsklm.ac.in",
    subject: "First mail from NodeJs",
    text: "Reyy.... Em chestunnav!!!"
}

transporter.sendMail(options, function(err, info) {
    if (err){
        console.log(err);
        return;
    }
    console.log("Sent: "  + info.response);
});