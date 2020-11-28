import { IonHeader, IonImg, IonItem, IonLabel, IonList, IonTitle,IonThumbnail, IonCard, IonButton, IonIcon } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './Promotion.css';
import { DropDownList } from './Widgets';
import { tools } from './tools';
import { useHistory } from 'react-router';
import { checkmarkCircleOutline, chevronDown } from 'ionicons/icons';
import { Icon } from 'ionicons/dist/types/components/icon/icon';
import { isFunctionOrConstructorTypeNode } from 'typescript';
import { images } from './Images';

export const Promotion = ()=>{
    return(
        <div className="promo-main-container">
            <IonThumbnail class="promo-thumbnail-container">
                <IonImg src={images.picture.fingerpoint}/>
            </IonThumbnail>
            <div className="promo-content-on-image-container">
                <div className="promo-content-container">
                    <div className="promo-content-title">title</div>
                    <div className="promo-content-sub-title">sub title</div>
                    <div className="promo-content-info">Take your business to the next level with expertly designed marketing materials.</div>
                    <div className="promo-content-info">Business Cards, Posters, Flyers, Web Design and more...</div>
                    <div className="promo-content-button promo-click promo-hover">Take me there</div> 
                </div>
            </div>
        </div>
    )
}
