import { IonContent, IonHeader, IonLabel, IonPage, IonImg, IonThumbnail, IonSlide, IonSlides, IonTitle, IonToolbar, IonList, IonItem, IonCard, IonNote } from '@ionic/react';
import React, { useRef } from 'react';
import { content } from '../components/Contents';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { images } from '../components/Images';
import { Promotion } from '../components/Promotion';
import { tools } from '../components/tools';
import './Model.css';

const Benefits: React.FC = () => {
  return (
    <IonPage>
        <IonContent>
            <Header id="benefits"/>
            <IonList className="model-header">
                <IonLabel>{content.objects.models.header}</IonLabel>
            </IonList>
            <div className="model-main-container">
                    {content.objects.models.list.map((info,key)=>(
                        <div className="model-item-container" key={key}>
                            <IonCard class="model-image-container">
                                <IonImg class="model-image" src={info.image}/>
                            </IonCard>
                            <IonList>
                                <IonLabel class="model-content">{info.name}</IonLabel>
                            </IonList>
                            <div className="model-button0 model-hover model-click">BOOK NOW</div>
                        </div>
                    ))}
                <IonList class="model-center-image-container" onMouseEnter={()=>{
                        const element = document.getElementById("model-book-btn");
                        if (element) element.hidden = false;
                    }} onMouseLeave={()=>{
                        const element = document.getElementById("model-book-btn");
                        if (element) element.hidden = true;
                    }}>
                    <IonCard class="model-center-image">
                        <IonImg class="model-image" src={images.picture.cost}/>
                    </IonCard> 
                    <div id="model-book-btn" className="model-button model-hover model-click">BOOK NOW</div>
                </IonList>
                   
            </div>
            <Footer/>
        </IonContent>
    </IonPage>
  );
};

export default Benefits;
