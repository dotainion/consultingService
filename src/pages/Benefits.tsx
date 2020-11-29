import { IonContent, IonHeader, IonLabel, IonPage, IonImg, IonThumbnail, IonSlide, IonSlides, IonTitle, IonToolbar, IonList, IonItem, IonCard, IonNote } from '@ionic/react';
import React, { useRef } from 'react';
import { content } from '../components/Contents';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { images } from '../components/Images';
import { Promotion } from '../components/Promotion';
import { tools } from '../components/tools';
import './Benefits.css';

const Benefits: React.FC = () => {
  return (
    <IonPage>
        <IonContent>
            <Header id="benefits"/>
            <IonList className="benefits-header">
                <IonLabel>{content.objects.benefits.header}</IonLabel>
            </IonList>
            <div className="benefits-main-container">
                    {content.objects.benefits.list.map((info,key)=>(
                        <div className="benefits-item-container" key={key}>
                            <IonCard class="benefits-image-container">
                                <IonImg class="benefits-image" src={info.image}/>
                            </IonCard>
                            <IonList>
                                <IonLabel class="benefits-content">{info.name}</IonLabel>
                            </IonList>
                        </div>
                    ))}
            </div>
            <Footer/>
        </IonContent>
    </IonPage>
  );
};

export default Benefits;
