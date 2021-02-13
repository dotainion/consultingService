import { IonThumbnail } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './Pop.css';
import { useHistory } from 'react-router';
import { images } from './Images';
import { globalVar } from '../global/globalVar';
import { tools } from './tools';


const tokenRef = "popups-info";
const token = tools.token;
export const Pop = (props:any)=>{
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(()=>{
        if (!token.isActive(tokenRef)){
            setTimeout(() => {
                setIsOpen(true);
                if (props.onOpen) props.onOpen();
            }, 10000);
            token.set(tokenRef);
        }
    },[]);
    return(
        <div hidden={!isOpen} className="pop-background-container">
            <div className="test-test">
                <div className="pop-main-container">
                    <span className="pop-close-button pop-close-hover" onClick={()=>{
                        setIsOpen(false);
                        if (props.onClose) props.onClose();
                    }}>X</span>
                    <div className="pop-image-container">
                        <IonThumbnail className="pop-image">
                            <img src={images.picture.businessplan}/>
                        </IonThumbnail>
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
                            if (props.onClose) props.onClose();
                            history.push(globalVar.route.Form);
                        }}>Yes, I Want This!</div>
                        <div className="pop-back-button-style"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
