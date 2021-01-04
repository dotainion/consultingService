import { AUTH_CREDS } from "./Config"
import { fb } from "./init"


export const allowAuthentication = async() =>{
    const appId = AUTH_CREDS.appId;
    const appKey = AUTH_CREDS.appAccess;
    await adminLogin(appId,appKey);
}

export const adminLogin = async(email, password) =>{
    try{
        await fb.auth().signInWithEmailAndPassword(email,password);
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

export const isLogin = () =>{
    console.log(fb.auth().currentUser)
    if (fb.auth().currentUser) return true;
    return false;
}

export const logOut = async() =>{
    fb.auth().signOut();
}