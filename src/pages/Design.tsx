import { IonButton, IonCard, IonContent, IonFooter, IonImg, IonInput, IonItem, IonLabel, IonList, IonPage, IonThumbnail } from '@ionic/react';
import React, { useEffect } from 'react';
import './Design.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { tools } from '../components/tools';
import { content } from '../components/Contents';
import { images } from '../components/Images';
import { Promotion } from '../components/Promotion';
import { FaLeaf } from 'react-icons/fa';
import { useHistory } from 'react-router';
import { globalVar } from '../global/globalVar';

const Design: React.FC = ()=>{
    const history = useHistory();
    const showWidget = (ids:any,state:boolean) =>{
        for (var id of ids){
            const element = document.getElementById(id);
            if (element) element.hidden = state;
        }
    }
    const benefits = [
        "Increase brand awareness",
        "Provide appropriate information",
        "Increase Customer Traffic",
        "Build sales and profits",
    ];
    tools.pageTitle();
    return(
        <IonPage>
            <IonContent>
                <Header id="design"/>
                <IonList class="design-intro-container">
                    <IonThumbnail class="design-intro-image">
                        <IonImg src={images.picture.businessplan}/>
                    </IonThumbnail>
                    <div className="design-intro-content-container">
                        <div>Promoting your brand will help you in many different ways:</div>
                        {benefits.map((benefit, key)=>(
                            <ul className="design-intro-content" key={key}>
                                <li>{benefit}.</li>
                            </ul>
                        ))}
                    </div>
                </IonList>
                <IonList class="design-sub-container">
                    {content.objects.designs.map((obj,index)=>(
                        <div className="design-item-container" onMouseEnter={()=>{
                            showWidget([`${obj.title}${index}`,`${obj.content}${index}`],false);
                        }} onMouseLeave={()=>{
                            showWidget([`${obj.title}${index}`,`${obj.content}${index}`],true);
                        }} key={index}>
                            <IonThumbnail class="design-item-image">
                                <IonImg src={obj.image}/>
                            </IonThumbnail>
                            <div className="design-content-container">{obj.title}</div>
                            <div hidden className="design-button design-button-click" onClick={()=>{
                                tools.state.set({other: obj.title});
                                history.push(globalVar.route.Form);
                            }} id={`${obj.title}${index}`}>BOOK NOW</div>
                            <div hidden className="design-content-info" id={`${obj.content}${index}`}>{obj.content}</div>
                        </div>
                    ))}
                </IonList>
                <Footer/>
            </IonContent>
        </IonPage>
    )
}

export default Design;