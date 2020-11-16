import { IonHeader, IonImg, IonItem, IonLabel, IonList, IonTitle,IonThumbnail } from '@ionic/react';
import React from 'react';
import './Header.css';
import image from '../images/image.jpg';

export const Header: React.FC = ()=>{
    const dropDownOptions = ["Servicess","About Us","Our Program Model","Benefits of Gmes"]
    return(
        <IonHeader class="header-main-container">
            <div className="header-sub-container">
                <div className="header-left-container">
                    <IonLabel class="header-title">Grenada Management</IonLabel>
                    <IonLabel class="header-title">Consulting Service</IonLabel>
                    <IonLabel class="header-title">gmes</IonLabel>
                </div>
                <div className="header-center-container">
                    <IonLabel class="header-title">Grenada</IonLabel>
                    <IonLabel class="header-title">Cariacou</IonLabel>
                    <IonLabel class="header-title">Pitite martinique</IonLabel>
                </div>
                <div className="header-right-container">
                    <IonThumbnail>
                        <IonImg class="header-image" src={image}/>
                    </IonThumbnail>
                </div>
            </div>
            <IonItem className="header-drop-down-options-container">
                {dropDownOptions.map((option,key)=>{return(
                    <div className="header-drop-down-buttons" key={key}>
                        <span className="header-drop-down-buttons-hover">{option}</span>
                    </div>
                )})}
            </IonItem>
        </IonHeader>
    )
}