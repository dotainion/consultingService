import React, { useEffect, useState } from 'react';
import { IonHeader, IonImg, IonItem, IonLabel, IonList, IonCard, IonTitle, IonNote, IonThumbnail, IonContent } from '@ionic/react';
import './Pricing.css';
import { tools } from '../tools';


export const Pricing = () =>{
    return(
        <div className="pricing-main-container">
            <div className="pricing-sub-container">
                <div className="pricing-content-container">
                    <div className="pricing-content-sub-container">
                        <div className="pricing-header">{tools.info.pricing.header}</div>
                        <span className="pricing-button pricing-button-hover">{"View Pricing >>"}</span>
                    </div>
                </div>
                <div className="pricing-image-container">
                    <img className="pricing-image" src={tools.images.pricing3}/>
                </div>
            </div>
        </div>
    )
}
