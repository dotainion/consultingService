import { AUTH_CREDS } from "./Config"
import { fb } from "./init"


export const allowAuthentication = async() =>{
    const appId = AUTH_CREDS.appId;
    const appKey = AUTH_CREDS.appAccess;
    await fb.auth().signInWithEmailAndPassword(appId,appKey);
}