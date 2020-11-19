import { IonButton, IonCard, IonFooter, IonInput, IonItem, IonLabel } from '@ionic/react';
import React from 'react';
import './Footer.css';
import { tools } from './tools';

export const Footer: React.FC = ()=>{
    return(
        <IonFooter class="footer-main-container">
            <div style={{width:"100%",height:"50px",backgroundColor:"gray",borderTop:"1px solid dodgerblue"}}></div>
            <div className="footer-sub-container">
                <div className="footer-box">
                    <div className="footer-content-main-container">
                        <div className="footer-content-header">{tools.info.aboutus.header}</div>
                        <div className="footer-content-sub-container">
                            {tools.info.aboutus.list.map((info, index)=>(
                                <div key={index}>
                                    <span className="footer-content-items footer-content-items-hover">{info}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="footer-box">
                    <div className="footer-content-main-container">
                        <div className="footer-content-header">{tools.info.contact.header}</div>
                        <div className="footer-content-sub-container">
                            {tools.info.contact.list.map((info, index)=>(
                                <div key={index}>
                                    <span className={`${info.style} ${info.hover}`}>{info.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="footer-box">
                    <div className="footer-content-main-container">
                        <div className="footer-content-header">{tools.info.location.header}</div>
                        <div className="footer-content-sub-container">
                            {tools.info.location.list.map((info, index)=>(
                                <div key={index}>
                                    <span className="footer-content-items">{info}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="footer-box">
                    <div className="footer-content-main-container">
                        <div className="footer-content-header">{tools.info.services.header}</div>
                        <div className="footer-content-sub-container">
                            <span className="footer-content-items footer-content-items-hover">View Our Servies</span>
                        </div>
                    </div>
                </div>
            </div>
        </IonFooter>
    )
}