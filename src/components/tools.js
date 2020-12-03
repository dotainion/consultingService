import nodemailer from 'nodemailer';
import { EMAIL_AUTH } from '../auth/Config';

class Email{
    emailer = nodemailer.createTransport({
        service: EMAIL_AUTH.provider,
        auth: {
            user: EMAIL_AUTH.email,
            pass: EMAIL_AUTH.password
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    send(data){
        try{
            const mailOptions = {
                from: data.from,
                to: EMAIL_AUTH.email,
                subject: data.subject,
                text: data.body
            };
            this.emailer.sendMail(mailOptions,(error, _)=>{
                if (error) return false;
                else return true;
            });
        }catch{
            return true;
        }
    }
}

class Clicks{
    id(elementId){
        try{
            document.getElementById(elementId).click();
        }catch{console.log(`${elementId} not found`);}
    }
    headerViewShow(){
        tools.click.id("header-top-view-show");
    }
    headerViewHide(){
        tools.click.id("header-top-view-hide");
    }
}

class Tools{
    click = new Clicks();
    open = new Clicks();
    email = new Email();
    compare(compareThis,withThat,returnIfTrue,returnIfFalse){
        if (compareThis === withThat) return returnIfTrue;
        else return returnIfFalse;
    }
    isMobile(){
        if (window.innerWidth <= 767) return true;
        return false;
    }
    isEmailValid(email){
        const regix = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (regix.test(email)) return true;
        return false;
    }
}
const tools = new Tools();
export { tools }