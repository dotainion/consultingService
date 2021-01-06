import { AUTH_CREDS } from "./Config"
import { fb } from "./init"

class Auth{
    allowAnonymous = async() =>{
        const appId = AUTH_CREDS.appId;
        const appKey = AUTH_CREDS.appAccess;
        await this.signIn(appId,appKey);
    }
    loggedInState(value=""){
        if (value !== ""){
            window.localStorage.setItem("login",JSON.stringify(value));
        }else{
            const data = window.localStorage.getItem("login");
            if (data) return JSON.parse(data);
            return "";
        }
    }
    signIn = async(email, password) =>{
        try{
            await fb.auth().signInWithEmailAndPassword(email,password);
            this.loggedInState(true);
            return {state:true, message:"Sucessful"};
        }catch(error){
            if (error.code === "auth/user-not-found"){
                return {state:false, message:"User dose not exist or may have been deactivated"};
            }else if (error.code === "auth/network-request-failed"){
                return {state:false, message:"Unable to connect to server, try again later"};
            }else{
                return {state:false, message:"Email or password is incorrect"};
            }
        }
    }
    isLogin = () =>{
        if (this.loggedInState()) return true;
        else if (fb.auth().currentUser) return true;
        return false;
    }
    signOut = async() =>{
        try{
            await fb.auth().signOut();
            this.loggedInState(null);
            return true;
        }catch{return false;}
        
    }
}

export const auth = new Auth();
