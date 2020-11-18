import { IonHeader, IonImg, IonItem, IonLabel, IonList, IonTitle,IonThumbnail, IonCard, IonModal, IonContent, IonInput, IonButton, IonCardContent } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './Form.css';
import img from '../images/image.jpg';
import img1 from '../images/image1.jpg';
import img2 from '../images/image2.jpg';
import img3 from '../images/image3.jpg';
import img4 from '../images/image4.jpg';
import { tools } from './tools';

export const Form = ()=>{
    const [ifOpen, setIsOpen] = useState(false);
    return(
        <>
            <div hidden={!ifOpen} className="form-background-container" onClick={()=>{
                setIsOpen(false);
            }}>
                <IonCard className="form-main-container">
                    <div className="form-header-and-close-container">
                        <div className="form-header">Header</div>
                        <div className="form-close form-close-hover" onClick={()=>{
                            setIsOpen(false);
                        }}>X</div>
                    </div>
                    <IonContent>
                        <IonCardContent>
                            <IonLabel>First Name</IonLabel>
                            <IonInput class="form-input form-input-focus"/>
                            <IonLabel>Last Name</IonLabel>
                            <IonInput class="form-input form-input-focus"/>
                            <IonLabel>Email</IonLabel>
                            <IonInput class="form-input form-input-focus"/>
                            <IonLabel>Phone</IonLabel>
                            <IonInput class="form-input form-input-focus"/>
                            <IonLabel>Company</IonLabel>
                            <IonInput class="form-input form-input-focus"/>
                            <IonLabel>Address</IonLabel>
                            <IonInput class="form-input form-input-focus"/>
                            <IonLabel>Service Required</IonLabel>
                            <IonInput class="form-input form-input-focus"/>
                            <IonLabel>Additional Details</IonLabel>
                            <IonInput class="form-input form-input-focus"/>
                            <IonButton fill="outline" class="form-button">Submit</IonButton>
                        </IonCardContent>
                    </IonContent>
                </IonCard>
            </div>
            <IonButton hidden onClick={()=>{
                if (ifOpen) setIsOpen(false);
                else setIsOpen(true); 
            }} id="form-display-hander-id"/>
        </>
    )
}