import React, { useEffect, useState } from 'react';
import { IonHeader, IonImg, IonItem, IonLabel, IonList, IonCard, IonTitle, IonNote, IonThumbnail, IonContent } from '@ionic/react';
import './Benefit.css';
import { tools } from '../tools';


export const Benefits = () =>{
    return(
        <div className="benefit-main-container">
            <div className="benefit-sub-container">
                <div className="benefit-content-container">
                    <div className="benefit-header">{tools.info.benefits.header}</div>
                </div>
            </div>
        </div>
    )
}

