import { IonButton, IonCard, IonFooter, IonInput, IonItem, IonLabel } from '@ionic/react';
import React, { useState } from 'react';
import './Footer.css';
import { tools } from './tools';
import { content } from './Contents';
import { images } from './Images';
import { Link, useHistory } from 'react-router-dom';
import { globalVar } from '../global/globalVar';
import { AlertPopup } from './Widgets';

export const Footer: React.FC = ()=>{
    const [alert, setAlert] = useState(false);
    const history = useHistory();
    return(
        <IonFooter class="footer-main-container">
            <AlertPopup 
                state={alert} 
                onClose={()=>{setAlert(false)}}
                header="Attention!!"
                subHeader="Development Information"
                msg="This feature is not yet developt and will be coming soon"
            />
            <div className="footer-app-links-container">
                <IonLabel className="footer-app-content">Visit us on</IonLabel>
                <images.icons.facebook color="rgb(13, 58, 102)" onClick={()=>{
                    setAlert(true);
                }} className="footer-app-image"/>
                <images.icons.instagram color="rgb(170, 7, 185)" onClick={()=>{
                    setAlert(true);
                }} className="footer-app-image"/>
            </div>
            <div className="footer-sub-container">
                <div className="footer-box">
                    <div className="footer-content-main-container">
                        <div className="footer-content-header">{content.objects.aboutus.header}</div>
                        <div className="footer-content-sub-container">
                            {content.objects.aboutus.list.map((info, index)=>(
                                <div key={index}>
                                    <span className="footer-content-items footer-content-items-hover" onClick={()=>{
                                        history.push(info.route);
                                    }}>{info.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="footer-box">
                    <div className="footer-content-main-container">
                        <div className="footer-content-header">{content.objects.contact.header}</div>
                        <div className="footer-content-sub-container">
                            {content.objects.contact.list.map((info, index)=>(
                                <div key={index}>
                                    <span className={`${info.style} ${info.hover}`}>{info.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="footer-box">
                    <div className="footer-content-main-container">
                        <div className="footer-content-header">{content.objects.location.header}</div>
                        <div className="footer-content-sub-container">
                            {content.objects.location.list.map((info, index)=>(
                                <div key={index}>
                                    <span className="footer-content-items">{info}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="footer-box">
                    <div className="footer-content-main-container">
                        <div className="footer-content-header">{content.objects.services.header}</div>
                        <div className="footer-content-sub-container">
                            <span className="footer-content-items footer-content-items-hover" onClick={()=>{
                                history.push(globalVar.route.Offers);
                            }}>View Our Servies</span>
                        </div>
                    </div>
                </div>
            </div>
        </IonFooter>
    )
}