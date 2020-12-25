import axios from 'axios';
import { mailConfig } from './config';

class Email{
    async send(data:any,callBack:any=null){
        try{
            const response = await axios.post(mailConfig.url,data)
            if (callBack) callBack({
                state: true,
                response: response.data,
                message: "successful"
            });
        }catch(error){
            if (callBack) callBack({
                state: false,
                response: error,
                message: "Unsuccessful"
            });
        }
    }
}
export const email = new Email();