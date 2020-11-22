import { IonHeader, IonImg, IonItem, IonLabel, IonList, IonTitle,IonThumbnail, IonCard, IonButton, IonIcon } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './Pop.css';
import { DropDownList } from './Widgets';
import { tools } from './tools';
import { useHistory } from 'react-router';
import { checkmarkCircleOutline, chevronDown } from 'ionicons/icons';
import { Icon } from 'ionicons/dist/types/components/icon/icon';
import { isFunctionOrConstructorTypeNode } from 'typescript';
import { images } from './Images';

export const Pop = (props:any)=>{
    const [isOpen, setIsOpen] = useState(false);
    useEffect(()=>{
        setTimeout(() => {
            setIsOpen(true);
            if (props.onOpen) props.onOpen();
        }, 30000);
    },[])
    return(
        <div hidden={!isOpen} className="pop-background-container">
            <div className="test-test">
            <div className="pop-main-container">
                <span className="pop-close-button pop-close-hover" onClick={()=>{
                    setIsOpen(false);
                    if (props.onClose) props.onClose();
                }}>X</span>
                <div className="pop-image-container">
                    <img className="pop-image" src={images.picture.businessplan}/>
                </div>
                <div className="pop-content-container">
                    <div>Business Planning Guide</div>
                    <div>Get Yours Now!</div>
                    <p className="pop-contents">
                        Take the stress out of Business planning. Get GMCS's 
                        comprehensive Business Planning Guide and build your blueprint for 
                        business success.
                    </p>
                    <div className="pop-button pop-hover" onClick={()=>{
                        setIsOpen(false);
                        tools.open.form()
                        if (props.onClose) props.onClose();
                    }}>Yes, I Want This!</div>
                    <div className="pop-back-button-style"/>
                </div>
            </div>
            </div>
        </div>
    )
}
