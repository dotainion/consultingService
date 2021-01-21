import { IonContent, IonHeader, IonLabel, IonPage, IonImg, IonThumbnail, IonSlide, IonSlides, IonTitle, IonToolbar, IonList, IonItem } from '@ionic/react';
import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { content } from '../components/Contents';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { images } from '../components/Images';
import { Promotion } from '../components/Promotion';
import { tools } from '../components/tools';
import { globalVar } from '../global/globalVar';
import './Offers.css';

const Offers: React.FC = () => {
    const history = useHistory();
  return (
    <IonPage>
        <IonContent>
            <Header hidden={[content.objects.headerLists[1].name]} id="offer"/>
            <Promotion/>
            <div className="offer-main-container">
                {content.objects.services.list.map((offers, key)=>(
                    <div className="offer-service-container" key={key}>
                        <IonThumbnail class="offer-thumbnail-container">
                            <IonImg src={offers.image}/>
                        </IonThumbnail>
                        <div className="offer-content-container">
                            <div className="offer-title">{offers.title}</div>
                            <p className="offer-content">{offers.content}</p>
                            <div className="offer-list">
                                {offers.list.map((list,key)=>(
                                    <div key={key}>{key+1}. {list}</div>
                                ))}
                            </div>
                        </div>
                        <div className="offer-button-container">
                            <div className="offer-button offer-button-click offer-button-hover" onClick={()=>{
                                tools.state.set(offers);
                                history.push(globalVar.route.Form);
                            }}>BOOK NOW</div>
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
