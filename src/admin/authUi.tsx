import { IonButton, IonCard, IonCardContent, IonInput, IonItem, IonLabel, IonList, IonPage } from '@ionic/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { adminLogin } from '../auth/authenticate';
import { tools } from '../components/tools';
import { globalVar } from '../global/globalVar';
import './authUi.css';

const AuthUi: React.FC = () =>{
    const history = useHistory();
    const [error, setError] = useState("");
    const [creds, setCreds] = useState({email: "", password: ""});
    const login = async() =>{
        setError("");
        if (!tools.isEmailValid(creds.email)){ 
            setError("Invalid Email Address");
        }else if (creds.password === ""){
            setError("Please provide a valid password");
        }else{
            const res = await adminLogin(creds.email, creds.password);
            if (res.state){
                history.push(globalVar.route.Admin);
            }else setError(res.message);
        }
    }
    return(
        <IonPage>
            <IonList  class="auth-ui-backdrop">
                <IonCard class="auth-ui-login-container">
                    <IonCardContent class="auth-ui-sub-container">
                            <div className="auth-ui-header">Login</div>
                            <div className="auth-ui-sub-header">Welcome to GMCS Administrator</div>
                            <div className="auth-ui-error">{error}</div>
                        <IonItem>
                            <IonLabel position="floating">Email</IonLabel>
                            <IonInput onIonChange={(e)=>{
                                if (e.detail.value) setCreds({email:e.detail.value, password: creds.password});
                            }} value={creds.email}/>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Password</IonLabel>
                            <IonInput onIonChange={(e)=>{
                                if (e.detail.value) setCreds({email:creds.email, password: e.detail.value});
                            }} value={creds.password}/>
                        </IonItem>
                        <IonCardContent>
                            <IonItem lines="full">
                                <IonButton slot="end" onClick={()=>{
                                    login();
                                }}>Sign in</IonButton>
                            </IonItem>
                        </IonCardContent>
                    </IonCardContent>
                </IonCard>
            </IonList>
        </IonPage>
    )
}

export default AuthUi;