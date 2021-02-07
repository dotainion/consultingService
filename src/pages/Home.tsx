import { IonContent, IonHeader, IonLabel, IonPage, IonImg, IonThumbnail, IonSlide, IonSlides, IonTitle, IonToolbar, IonList } from '@ionic/react';
import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Link, useHistory } from 'react-router-dom';
import { tools } from '../components/tools';
import { Intro } from '../components/onHome/Intro';
import { Offers } from '../components/onHome/Offers';
import { Stocks } from '../components/onHome/Stocks';
import { Welcome } from '../components/onHome/Welcome';
import { Vision } from '../components/onHome/Vision';
import { Pop } from '../components/Pop';
import { content } from '../components/Contents';
import { SuggestionBox } from '../components/Widgets';

const Home: React.FC = () => {
  const [opacity, setOpacity] = useState("");
  tools.pageTitle();
  return (
    <IonPage>
      <SuggestionBox/>
      <Pop onOpen={()=>{setOpacity("0.3")}} onClose={()=>{setOpacity("")}}/>
      <IonContent class="home-main-content-container" style={{opacity:opacity}}>
        <Header hidden={[content.objects.headerLists[0].name]} id="home"/>
        <Intro/>
        <Offers/>
        <Stocks/>
        <Welcome/>
        <Vision/>

        <div className="home-child-container">
          <div className="home-child-content-header">OUR CLIENTS</div>
          <p className="home-child-contents">
            GMCS has worked with many customers from a variety of industries and 
            is willing to help small or large business improve on their service quality. 
            <Link to="/clients" style={{textDecoration:"none"}}>
              <span className="home-child-content-button home-child-content-button-hover">Click here</span>
            </Link> 
            to see some of the clients we work with.
          </p>
        </div>

        <Footer/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
