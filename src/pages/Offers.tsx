import { IonContent, IonHeader, IonLabel, IonPage, IonImg, IonThumbnail, IonSlide, IonSlides, IonTitle, IonToolbar, IonList, IonItem } from '@ionic/react';
import React, { useRef } from 'react';
import { content } from '../components/Contents';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { images } from '../components/Images';
import { Promotion } from '../components/Promotion';
import { tools } from '../components/tools';
import './Offers.css';

const Offers: React.FC = () => {
  return (
    <IonPage>
        <IonContent>
            <Header id="offer"/>
            <Promotion/>
            <div className="offer-main-container">
                {content.objects.services.list.map((offers, key)=>(
                    <div className="offer-service-container" key={key}>
                        <IonThumbnail class="offer-thumbnail-container">
                            <IonImg src={images.picture.planning}/>
                        </IonThumbnail>
                        <div className="offer-content-container">
                            <div className="offer-title">{offers.title}</div>
                            <p className="offer-content">{offers.content}</p>
                        </div>
                        <div className="offer-button-container">
                            <div className="offer-button offer-button-click offer-button-hover">BOOK NOW</div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer/>
        </IonContent>
    </IonPage>
  );
};

export default Offers;
