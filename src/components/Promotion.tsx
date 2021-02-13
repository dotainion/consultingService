import { IonImg, IonThumbnail } from '@ionic/react';
import React from 'react';
import './Promotion.css';
import { useHistory } from 'react-router';
import { images } from './Images';
import { globalVar } from '../global/globalVar';

export const Promotion = ()=>{
    const history = useHistory();
    return(
        <div className="promo-main-container">
            <IonThumbnail class="promo-thumbnail-container">
                <IonImg src={images.picture.fingerpoint}/>
            </IonThumbnail>
            <div className="promo-content-on-image-container">
                <div className="promo-content-container">
                    <div className="promo-content-title">GMCS</div>
                    <div className="promo-content-sub-title">Paving the way for you.</div>
                    <div className="promo-content-info">Take your business to the next level with expertly designed marketing materials.</div>
                    <div className="promo-content-info">Business Cards, Posters, Flyers, Web Design and more...</div>
                    <div className="promo-content-button promo-click promo-hover" onClick={()=>{
                        history.push(globalVar.route.Design);
                    }}>Take me there</div> 
                </div>
            </div>
        </div>
    )
}
