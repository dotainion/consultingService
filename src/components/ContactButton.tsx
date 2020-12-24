import React, { useEffect, useState } from 'react';
import { IonHeader, IonImg, IonItem, IonLabel, IonList, IonCard, IonTitle, IonNote, IonThumbnail, IonContent } from '@ionic/react';
import './ContactButton.css';
import { useHistory } from 'react-router';
import { globalVar } from '../global/globalVar';


export const ContactButton = () =>{
    const history = useHistory();
    return(
        <div className="contactButton-main-container">
            <div className="contactButton-button contactButton-hover contactButton-click" onClick={()=>{
                history.push(globalVar.route.Form);
            }}>WANT MORE INFORMATION?</div>
            <div className="contactButton-button-bar">WANT MORE INFORMATION?</div>
        </div>
    )
}