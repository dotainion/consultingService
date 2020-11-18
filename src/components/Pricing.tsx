import React from 'react';
import { IonHeader, IonImg, IonItem, IonLabel, IonList, IonCard, IonTitle, IonNote, IonThumbnail, IonContent } from '@ionic/react';
import './Pricing.css';
import { tools } from './tools';

export const Pricing = () =>{
    return(
        <div className="pricing-main-container">
            <div className="pricing-header">{tools.info.pricing.header}</div>
            <div className="pricing-sub-container">
                <div className="pricing-info">{tools.info.pricing.info}</div>
                <div className="pricing-why-this-rates">{tools.info.pricing.whyThisRates}</div>
                <div className="pricing-rate-container">
                    {tools.info.pricing.rates.map((costing, index)=>(
                        <ol className="pricing-rate-item" key={index}>{costing}</ol>
                    ))}
                </div>
            </div>
        </div>
    )
}