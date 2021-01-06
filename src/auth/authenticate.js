import { AUTH_CREDS } from "./Config";
import { fb } from "./init"
const jwt = require("jsonwebtoken");

class Auth{
    toks = "tokenize-auth";
    tokenKey = "some key for my token";
    userStore = "user-objects";
    tokenize(set=true){
        if (set){
            const userId = this.curentUser().uid;
            const token = jwt.sign({id:userId}, this.tokenKey, { expiresIn: '1h'});
            window.localStorage.setItem(this.toks,JSON.stringify(token));
        }else{
            window.localStorage.setItem(this.toks,JSON.stringify(null));
        }
    }
    isTokenize(){
        try{
            const token = window.localStorage.getItem(this.toks);
            if (token){
                const isActive = jwt.verify(JSON.parse(token), this.tokenKey);
                if (isActive) return true;
            }
            return false;
        }catch{return false;}
    }
    curentUser(userId="get"){
        if (userId === "get"){
            const user = window.localStorage.getItem(this.userStore);
            if (user) return JSON.parse(user);
            return "";
        }else{
            window.localStorage.setItem(this.userStore,JSON.stringify(userId));
        }
    }
    allowAnonymous = async() =>{
        const appId = AUTH_CREDS.appId;
        const appKey = AUTH_CREDS.appAccess;
        await this.signIn(appId,appKey);
    }
    signIn = async(email, password) =>{
        try{
            const user = await fb.auth().signInWithEmailAndPassword(email,password);
            this.curentUser(user);
            this.tokenize();
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
        if (this.isTokenize()){ 
            this.tokenize();
            return true;
        }else if (fb.auth().currentUser) return true;
        return false;
    }
    signOut = async() =>{
        try{
            await fb.auth().signOut();
            this.tokenize(null);
            return true;
        }catch{return false;}
        
    }
}

export const auth = new Auth();
