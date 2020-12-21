import { IonContent, IonHeader, IonLabel, IonPage, IonImg, IonThumbnail, IonSlide, IonSlides, IonTitle, IonToolbar, IonList, IonItem } from '@ionic/react';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { content } from '../components/Contents';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { images } from '../components/Images';
import { Promotion } from '../components/Promotion';
import { tools } from '../components/tools';
import { globalVar } from '../global/globalVar';
import './FAQ.css';

const FAQs: React.FC = () => {
  return (
    <IonPage>
        <IonContent>
            <Header id="FAQs"/>
            <IonList class="faq-container">
                <IonItem class="faq-header">
                    <IonLabel>Frequently ask questions</IonLabel>
                </IonItem>
            </IonList>
            <Footer/>
        </IonContent>
    </IonPage>
  );
};

export default FAQs;
