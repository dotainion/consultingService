import React from 'react';
import { IonHeader, IonImg, IonItem, IonLabel, IonList, IonCard, IonTitle, IonNote, IonThumbnail, IonContent } from '@ionic/react';
import './Offers.css';
import { tools } from './tools';

export const Offers = () =>{
    
    return(
        <div className="offer-card-main-container">
            <div className="offer-card-header">WHAT WE OFFER</div>
            <div className="offer-card-sub-container">
                {
                    tools.info.offers.map((offer:any, index:any)=>(
                        <div className="offers-card-container offers-card-hover" onClick={()=>{
                            
                        }} key={index}>
                            <div className="offers-card-sub-container">
                                <div className="offers-card-title">{offer.title}</div>
                                <div className="offers-card-sub-title">{offer.subTitle}</div>
                                <p className="offers-card-notes">{offer.note}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}