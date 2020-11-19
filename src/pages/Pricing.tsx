import { IonContent, IonHeader, IonLabel, IonPage, IonImg, IonThumbnail, IonSlide, IonSlides, IonTitle, IonToolbar, IonList } from '@ionic/react';
import React, { useRef } from 'react';
import './Home.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Offers } from '../components/Offers';
import img from '../images/image.jpg';
import img1 from '../images/image1.jpg';
import img2 from '../images/image2.jpg';
import img3 from '../images/image3.jpg';
import img4 from '../images/image4.jpg';
import { Link } from 'react-router-dom';
import { tools } from '../components/tools';

const Pricing: React.FC = () => {
  const images = [img,img1,img2,img3,img4];
  return (
    <IonPage>
      <IonContent>
        
      </IonContent>
    </IonPage>
  );
};

export default Pricing;
