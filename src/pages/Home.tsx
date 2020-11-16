import { IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Home.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header/>
      <IonContent fullscreen>
        
      </IonContent>
      <Footer/>
    </IonPage>
  );
};

export default Home;
