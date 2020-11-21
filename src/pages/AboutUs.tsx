import { IonHeader, IonImg, IonItem, IonLabel, IonList, IonTitle,IonThumbnail, IonCard } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './AboutUs.css';
import { tools } from '../components/tools';


export const AboutUs: React.FC = ()=>{
    return(
        <div className="about-us-main-container">
            <div className="about-us-header">{tools.info.aboutus.header}</div>
            <div className="about-us-sub-container">
                {tools.info.aboutusData.list.map((aboutus, index)=>(
                    <div className="about-us-items" key={index}>{aboutus}</div>
                ))}
            </div>
        </div>
    )
}