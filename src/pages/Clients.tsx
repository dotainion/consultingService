import { IonButton, IonCard, IonContent, IonFooter, IonInput, IonItem, IonLabel, IonPage } from '@ionic/react';
import React from 'react';
import './Clients.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { tools } from '../components/tools';

const Clients: React.FC = ()=>{
    return(
        <IonPage className="clients-page-container">
            <IonContent>
                <Header/>
                <div className="clients-main-container">
                    <div className="clients-header">{tools.info.clients.header}</div>
                    <div className="clients-sub-container">
                        {tools.info.clients.names.map((client, index)=>(
                            <div className="clients-items" key={index}>{index+1}: {client}</div>
                        ))}
                    </div>
                </div>
                <Footer/>
            </IonContent>
        </IonPage>
    )
}

export default Clients