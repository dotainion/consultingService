const app = require("express")();
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

//app uses
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 4000;
const mailTo = [
    "areset0000@gmail.com",
    "mb.repairss@gmail.com"
];

class Email{
    emailer = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.EMAIL_PASSWORD
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    send(data){
        try{
            const mailOptions = {
                from: data.from,
                to: mailTo,
                subject: data.subject,
                text: data.body
            };
            this.emailer.sendMail(mailOptions,(error, info)=>{
                console.log(error, info)
                if (error) return {state:false, message: error.Error};
                else return {state:true, message: info};
            });
        }catch{
            return true;
        }
    }
}

app.post("/",(req, res)=>{
    const emailer = new Email();
    console.log(emailer.send(req.body));
    res.json({
        hllo: "hi there"
    });
});

app.listen(port, ()=>{
    console.log(`starting server on port ${port}`);
});