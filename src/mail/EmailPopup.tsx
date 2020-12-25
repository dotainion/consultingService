import React, { useEffect, useState } from 'react';
import { IonButton, IonContent, IonIcon, IonItem, IonLabel, IonList, IonModal } from "@ionic/react";
import { SiGmail } from 'react-icons/si';
import { CgWebsite } from 'react-icons/cg';
import { FaDesktop, FaMobileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { globalVar } from '../global/globalVar';
import { content } from '../components/Contents';
import { chevronDown, chevronUp } from 'ionicons/icons';
import './EmailPopup.css';
import { tools } from '../components/tools';

export const EmailPopup = () =>{
    const [open, setOpen] = useState(true);
    const [showDetails, setShowDetails] = useState(false);
    const [Email, setEmail] = useState({device: "", icon: FaMobileAlt});

    useEffect(()=>{
        setInterval(()=>{
            if (tools.isMobile()) setEmail({
                device: "Send email using your mobile app",
                icon: FaMobileAlt
            });
            else setEmail({
                device: "Send email using desktop app",
                icon: FaDesktop
            });
        },1000);
    },[]);

    const textMultiColor = (texts:string) =>{
        const Color = ["blue","red","yellow","green"];
        let widget = [];
        let index = 0;
        for (let text of texts){
            index ++;
            if (index > Color.length) index = 0;
            widget.push(<span style={{color:Color[index]}} key={index}>{text}</span>);
        }
        return widget;
    }
    return(
        <IonModal isOpen={open} backdropDismiss={false} onDidDismiss={()=>{setOpen(false)}}>
            <IonContent>
                <IonList class="mail-header">
                    <IonLabel>This page is is not yet fully developed </IonLabel>
                    <div className="mail-header-icon">
                        <SiGmail/>
                        <div className="mail-header-icon-text">{textMultiColor("Gmail")}</div>
                    </div>
                </IonList>
                <IonList class="mail-icon-container">
                    <div onClick={()=>{
                        window.open(`mailTo:${content.objects.contact.list[0].name}`,"_self");
                    }} className="mail-icon-sub mail-icon-hover">
                        <Email.icon/>
                        <div className="mail-icon-text">{Email.device}</div>
                    </div>
                    <div onClick={()=>{
                        window.open(globalVar.siteUrl.gmail);
                    }} className="mail-icon-sub mail-icon-hover">
                        <CgWebsite/>
                        <div className="mail-icon-text">Send email using the browser "gmail.com"</div>
                    </div>
                </IonList>
                <IonList class="mail-button-container">
                    <IonList class="mail-left-button-container" lines="none">
                        <div className="mail-left-button mail-detail-hover" onClick={()=>{
                                if (showDetails) setShowDetails(false);
                                else setShowDetails(true);
                            }}>
                            <IonLabel>Details</IonLabel>
                            <IonIcon hidden={showDetails} class="mail-button-icon" src={chevronDown}/>
                            <IonIcon hidden={!showDetails} class="mail-button-icon" src={chevronUp}/>
                        </div>
                        <IonList hidden={!showDetails} class="mail-detail-content-container">
                            <p>Windows 10 Mail app is a lightweight email client which comes with Windows 10. 
                                Later windows might be optional Click <Link to="#" onClick={()=>{
                                    window.open(`mailTo:${content.objects.contact.list[0].name}`,"_self");
                                }}>here</Link> to use app</p>
                            <p>You can use your browser to send email by going to <Link to="#" onClick={()=>{
                                window.open(globalVar.siteUrl.gmail);
                            }}>gmail.com</Link></p>
                        </IonList>
                    </IonList>
                    <IonItem class="mail-right-button-container" lines="none">
                        <IonButton class="mail-right-button" slot="end" onClick={()=>{
                            setOpen(false);
                        }}>I'll take my chances</IonButton>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonModal>
    )
}