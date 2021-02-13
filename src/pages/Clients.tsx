import { IonButton, IonCard, IonContent, IonFooter, IonImg, IonInput, IonItem, IonLabel, IonPage, IonThumbnail } from '@ionic/react';
import React from 'react';
import './Clients.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { tools } from '../components/tools';
import { content } from '../components/Contents';
import { images } from '../components/Images';
import { Promotion } from '../components/Promotion';

const Clients: React.FC = ()=>{
    tools.pageTitle();
    return(
        <IonPage className="clients-page-container">
            <IonContent>
                <Header id="clients"/>
                <Promotion/>
                <div className="clients-main-container">
                    <div className="clients-sub-container">
                        <div className="clients-image-container">
                            <IonThumbnail class="client-image-thumbnail">
                                <IonImg src={images.picture.clientbg}/>
                            </IonThumbnail>
                        </div>
                        <div className="clients-list-container">
                            <div className="clients-header">{content.objects.clients.header}</div>
                            {content.objects.clients.names.map((client, index)=>(
                                <div className="clients-items" key={index}>{index+1}: {client}</div>
                            ))}
                            <div className="clients-items">and more...</div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </IonContent>
        </IonPage>
    )
}

export default Clients