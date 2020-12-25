import { IonButton, IonContent, IonIcon, IonItem, IonLabel, IonList, IonModal, IonPage, IonSlide, IonSlides } from '@ionic/react';
import { chevronDown, chevronUp } from 'ionicons/icons';
import React, { useState } from 'react';
import { CgWebsite } from 'react-icons/cg';
import { FaDesktop } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { content } from '../components/Contents';
import { tools } from '../components/tools';
import { globalVar } from '../global/globalVar';
import './Tests.css';

const slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: {
        delay: 142000
    }
};

const Test: React.FC = () =>{
    return(
        <IonPage>
            <IonContent>
                <IonSlides
                    pager={true} 
                    options={slideOpts} 
                    id="slide" 
                    style={{height:"100%"}}                   
                >
                    <IonSlide>
                        <div>one</div>
                    </IonSlide>
                    <IonSlide>
                        <div>two</div>
                    </IonSlide>
                    <IonSlide>
                        <div>three</div>
                    </IonSlide>
                </IonSlides>
                <IonButton onClick={()=>{
                    tools.click.byId("slide");
                }}>Click Me</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default Test;

