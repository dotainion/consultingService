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
import { Introduction } from '../components/Intro';
import { Pricing } from '../components/Pricing';
import { Link } from 'react-router-dom';
import { tools } from '../components/tools';

const Home: React.FC = () => {
  const scrollRef = useRef<HTMLIonContentElement>(null);
  const images = [img,img1,img2,img3,img4];
  return (
    <IonPage>
      <IonContent class="home-main-content-container" ref={scrollRef}>
        <Header scrollTo={async(pos:any)=>{
          const element = scrollRef?.current;
          if (element) console.log(await element.scrollToPoint(pos.x,pos.y))
        }}/>
        <Introduction/>
        <Pricing/>
        <Offers/>

        <div className="home-child-content-container">
          <div className="home-child-content-header">{tools.info.benefits.header}</div>
              {
                tools.info.benefits.list.map((benifit, index)=>(
                  <ul className="home-child-contents-benefit" key={index}>{benifit}</ul>
                ))
              } 
        </div>

        <div className="home-child-container">
          <div className="home-child-content-header">OUR CLIENTS</div>
          <p className="home-child-contents">
            PAC Worldwide has worked with thousands of 
            customers from a variety of industries. 
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
