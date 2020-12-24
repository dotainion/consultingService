import { IonButton, IonContent, IonIcon, IonItem, IonLabel, IonList, IonModal, IonPage, IonSlide, IonSlides } from '@ionic/react';
import { chevronDown, chevronUp } from 'ionicons/icons';
import React, { useState } from 'react';
import { CgWebsite } from 'react-icons/cg';
import { FaDesktop } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { content } from '../components/Contents';
import { tools } from '../components/tools';
import { globalVar } from '../global/globalVar';
import './Tests.css';

const slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: {
        delay: 142000
    }
};

const Test: React.FC = () =>{
    return(
        <IonPage>
            <IonContent>
                <IonSlides
                    pager={true} 
                    options={slideOpts} 
                    id="slide" 
                    style={{height:"100%"}}                   
                >
                    <IonSlide>
                        <div>one</div>
                    </IonSlide>
                    <IonSlide>
                        <div>two</div>
                    </IonSlide>
                    <IonSlide>
                        <div>three</div>
                    </IonSlide>
                </IonSlides>
                <IonButton onClick={()=>{
                    tools.click.byId("slide");
                }}>Click Me</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default Test;

export const TempEmailPopup = () =>{
    const [open, setOpen] = useState(true);
    const [showDetails, setShowDetails] = useState(false);
    return(
        <IonModal isOpen={open} backdropDismiss={false} onDidDismiss={()=>{setOpen(false)}}>
            <IonContent>
                <IonList class="test-header">
                    <IonLabel>This page is is not yet fully developed </IonLabel>
                </IonList>
                <IonList class="test-icon-container">
                    <div onClick={()=>{
                        window.open(`mailTo:${content.objects.contact.list[0].name}`,"_self");
                    }} className="test-icon-sub test-icon-hover">
                        <FaDesktop/>
                        <div className="test-icon-text">Send email using desktop app</div>
                    </div>
                    <div onClick={()=>{
                        window.open(globalVar.siteUrl.gmail);
                    }} className="test-icon-sub test-icon-hover">
                        <CgWebsite/>
                        <div className="test-icon-text">Send email using the browser "gmail.com"</div>
                    </div>
                </IonList>
                <IonList class="test-button-container">
                    <IonList class="test-left-button-container" lines="none">
                        <div className="test-left-button" onClick={()=>{
                                if (showDetails) setShowDetails(false);
                                else setShowDetails(true);
                            }}>
                            <IonLabel>Details</IonLabel>
                            <IonIcon hidden={showDetails} class="test-button-icon" src={chevronDown}/>
                            <IonIcon hidden={!showDetails} class="test-button-icon" src={chevronUp}/>
                        </div>
                        <IonList hidden={!showDetails}>
                            <p>Windows 10 Mail app is a lightweight email client which comes with Windows 10. 
                                Later windows might be optional Click <Link to="#" onClick={()=>{
                                    window.open(`mailTo:${content.objects.contact.list[0].name}`,"_self");
                                }}>here</Link> to use app</p>
                            <p>You can use your browser to send email by going to <Link to="#" onClick={()=>{
                                window.open(globalVar.siteUrl.gmail);
                            }}>gmail.com</Link></p>
                        </IonList>
                    </IonList>
                    <IonItem class="test-right-button-container" lines="none">
                        <IonButton class="test-right-button" slot="end" onClick={()=>{
                            setOpen(false);
                        }}>I'll take my chances</IonButton>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonModal>
    )
}