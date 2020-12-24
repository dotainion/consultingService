import React from 'react';
import { IonHeader, IonImg, IonItem, IonLabel, IonList, IonCard, IonTitle, IonNote, IonThumbnail, IonContent } from '@ionic/react';
import './Offers.css';
import { tools } from '../tools';
import { Link } from 'react-router-dom';
import { content } from '../Contents';


export const Offers = () =>{
    
    return(
        <div className="offer-card-main-container">
            <div className="offer-card-header">WHAT WE OFFER</div>
            <Link id="offer-link" to="/offers">
                <div className="offers-button offers-button-hover">{"Go to Offers >>"}</div>
            </Link>
            <div className="offer-card-sub-container">
                {
                    content.objects.offers.map((offer:any, index:any)=>(
                        <div className="offers-card-container offers-card-hovor" onClick={()=>{tools.click.byId("offer-link")}} key={index}>
                            <div className="offers-card-img-container">
                                <img className="offers-image" src={offer.image}/>
                            </div>
                            <div className="offers-card-text-container">
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