import { IonThumbnail } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './Pop.css';
import { useHistory } from 'react-router';
import { images } from './Images';
import { globalVar } from '../global/globalVar';
const jwt = require('jsonwebtoken');

class Token{
    tokenKey = "somekey";
    set(){
        const token = jwt.sign({email:""}, this.tokenKey, { expiresIn: '120h'});
        window.localStorage.setItem("pop-token",token);
    }
    isActive(){
        try{
            const token = window.localStorage.getItem("pop-token");
            const res = jwt.verify(token, this.tokenKey);
            if (res) return true;
            return false;
        }catch{return false;}
    }
}
const token = new Token();

export const Pop = (props:any)=>{
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(()=>{
        console.log(token.isActive())
        if (!token.isActive()){
            setTimeout(() => {
                setIsOpen(true);
                if (props.onOpen) props.onOpen();
            }, 10000);
            token.set();
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
