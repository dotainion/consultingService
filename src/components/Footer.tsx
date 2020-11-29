import { IonButton, IonCard, IonFooter, IonInput, IonItem, IonLabel } from '@ionic/react';
import React from 'react';
import './Footer.css';
import { tools } from './tools';
import { content } from './Contents';
import { images } from './Images';
import { Link } from 'react-router-dom';

export const Footer: React.FC = ()=>{
    return(
        <IonFooter class="footer-main-container">
            <div className="footer-app-links-container">
                <images.icons.facebook color="rgb(13, 58, 102)" className="footer-app-image"/>
                <images.icons.instagram color="rgb(170, 7, 185)" className="footer-app-image"/>
            </div>
            <div className="footer-sub-container">
                <div className="footer-box">
                    <div className="footer-content-main-container">
                        <div className="footer-content-header">{content.objects.aboutus.header}</div>
                        <div className="footer-content-sub-container">
                            {content.objects.aboutus.list.map((info, index)=>(
                                <div key={index}>
                                    <span className="footer-content-items footer-content-items-hover">{info.name}</span>
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
                            <Link to="offers" id="to-offers" hidden/>
                            <span className="footer-content-items footer-content-items-hover" onClick={()=>{
                                tools.click.id("to-offers");
                            }}>View Our Servies</span>
                        </div>
                    </div>
                </div>
            </div>
        </IonFooter>
    )
}