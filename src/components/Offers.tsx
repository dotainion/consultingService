import React from 'react';
import { IonHeader, IonImg, IonItem, IonLabel, IonList, IonCard, IonTitle, IonNote, IonThumbnail } from '@ionic/react';
import './Offers.css';

export const Offers = () =>{
    const offers:any = [
        {
            title: "",
            subTitle: "",
            note: ""
        }
    ]
    return(
        <>
        {
            offers.map((offer:any, index:any)=>(
                <IonCard class="offers-card-container">
                    <IonTitle class="offers-card-title">{offer.title}</IonTitle>
                    <IonTitle class="offers-card-sub-title">{offer.subTitle}</IonTitle>
                    <IonNote class="offers-card-notes">{offer.note}</IonNote>
                </IonCard>
            ))
        }
        </>
    )
}