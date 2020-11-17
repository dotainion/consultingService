import React from 'react';
import { IonHeader, IonImg, IonItem, IonLabel, IonList, IonCard, IonTitle,IonThumbnail } from '@ionic/react';
import './Offers.css';

const Offers = () =>{
    const offers:any = [

    ]
    return(
        <>
        {
            offers.map((offer:any, index:any)=>(
                <IonCard>

                </IonCard>
            ))
        }
        </>
    )
}