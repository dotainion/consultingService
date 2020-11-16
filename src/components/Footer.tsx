import { IonButton, IonCard, IonFooter, IonInput, IonItem, IonLabel } from '@ionic/react';
import React from 'react';
import './Footer.css';

export const Footer: React.FC = ()=>{
    
    return(
        <IonFooter class="footer-main-container">
            <IonLabel>Header offic Contact Us</IonLabel>
            <div>
                <div>

                </div>
                <IonCard style={{width:"400px",padding:"10px",marginLeft:"100%",transform:"translateX(-105%)",textAlign:"left"}}>
                    <IonLabel>First Name</IonLabel>
                    <IonInput style={{border:"1px solid gray"}}/>
                    <IonLabel>Last Name</IonLabel>
                    <IonInput style={{border:"1px solid gray"}}/>
                    <IonLabel>Email Adress</IonLabel>
                    <IonInput style={{border:"1px solid gray"}}/>
                    <IonItem>
                        <IonButton slot="end">Submit</IonButton>
                    </IonItem>
                </IonCard>
            </div>
        </IonFooter>
    )
}