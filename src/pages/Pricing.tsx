import { IonContent, IonHeader, IonLabel, IonPage, IonImg, IonThumbnail, IonSlide, IonSlides, IonTitle, IonToolbar, IonList } from '@ionic/react';
import React, { useRef } from 'react';
import { Header } from '../components/Header';
import './Home.css';

const Pricing: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Header id="pricing"/>
        
      </IonContent>
    </IonPage>
  );
};

export default Pricing;
