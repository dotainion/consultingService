import React, { useEffect, useState } from 'react';
import { IonHeader, IonImg, IonItem, IonLabel, IonList, IonCard, IonTitle, IonNote, IonThumbnail, IonContent } from '@ionic/react';
import './Intro.css';
import { tools } from '../tools';

export const Intro = () =>{
    return(
        <div className="intro-main-container">
            <IonThumbnail class="intro-thumbnail-container">
                <IonImg src={tools.images.consulter}/>
            </IonThumbnail>
            <div className="intro-sub-container">
                <div className="intro-content-container">
                    <div className="intro-header">Make that step towords greatness</div>
                    <div className="intro-header">improve your business</div>
                    <span className="intro-button intro-button-hover" onClick={()=>{
                        tools.open.form()
                    }}>Contact us</span>
                </div>
            </div>
        </div>
    )
}
