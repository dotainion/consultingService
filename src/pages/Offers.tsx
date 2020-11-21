import { IonContent, IonHeader, IonLabel, IonPage, IonImg, IonThumbnail, IonSlide, IonSlides, IonTitle, IonToolbar, IonList, IonItem } from '@ionic/react';
import React, { useRef } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { tools } from '../components/tools';
import './Offers.css';

const Offers: React.FC = () => {
  return (
    <IonPage>
        <IonContent className="page-offer-main-container">
            <Header/>
            <IonList class="page-offer-sub-container">
                <IonItem lines="full">
                    <div className="page-offer-header">WHAT WE OFFER</div>
                </IonItem>
                <div className="page-offer-content-main-container">
                    {tools.info.services.list.map((offers, key)=>(
                        <div className="page-offer-content-container" key={key}>
                            <IonLabel class="page-offer-items">{offers}</IonLabel>
                        </div>
                    ))}
                </div>
            </IonList>
            <Footer/>
        </IonContent>
    </IonPage>
  );
};

export default Offers;
