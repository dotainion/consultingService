import { IonHeader, IonImg, IonItem, IonLabel, IonList, IonTitle,IonThumbnail, IonCard, IonPage, IonContent } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './AboutUs.css';
import { tools } from '../components/tools';
import { content } from '../components/Contents';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';


const AboutUs: React.FC = ()=>{
    return(
        <IonPage>
            <IonContent>
                <Header id="about-us"/>
                <div className="about-us-main-container">
                    <div className="about-us-header">{content.objects.aboutusData.header}</div>
                    <p className="about-us-sub-header">{content.objects.aboutusData.subHeader}</p>
                    <div className="about-us-sub-container">
                        {content.objects.aboutusData.list.map((aboutus, index)=>(
                            <div className="about-us-items" key={index}>{aboutus}</div>
                        ))}
                    </div>
                </div>
                <Footer/>
            </IonContent>
        </IonPage>
    )
}
export default AboutUs