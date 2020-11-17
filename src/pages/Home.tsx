import { IonContent, IonHeader, IonLabel, IonPage, IonImg, IonThumbnail, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Home.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import img from '../images/image.jpg';
import img1 from '../images/image1.jpg';
import img2 from '../images/image2.jpg';
import img3 from '../images/image3.jpg';
import img4 from '../images/image4.jpg';

const Home: React.FC = () => {
  const images = [img,img1,img2,img3,img4];
  return (
    <IonPage>
      <Header/>
      <IonContent fullscreen>
        <IonThumbnail>
            <IonImg class="home-intro-image" src={images[0]}/>
        </IonThumbnail>
      </IonContent>
      <Footer/>
    </IonPage>
  );
};

export default Home;
