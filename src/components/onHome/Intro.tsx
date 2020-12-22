import React, { useEffect, useState } from 'react';
import { IonHeader, IonImg, IonItem, IonLabel, IonList, IonCard, IonTitle, IonNote, IonThumbnail, IonContent } from '@ionic/react';
import './Intro.css';
import { tools } from '../tools';
import ReactPlayer from 'react-player';
import { images } from '../Images';
import { useHistory } from 'react-router';

export const Intro = () =>{
    const history = useHistory();
    return(
        <div className="intro-main-container">
            <IonThumbnail class="intro-thumbnail-container">
                <IonImg src={images.picture.consulter}/>
                {/*<div hidden={!bgChange.video} style={{width:"100%",height:"100%"}}>
                    <ReactPlayer
                        url="https://youtu.be/luai0p0y2zE"
                        controls
                        playbackRate = {2}
                        width = "100%"
                        height = "100%"
                        playing = {bgChange.video}
                    />
                </div>*/}
            </IonThumbnail>
            <div className="intro-sub-container">
                <div className="intro-content-container">
                    <div className="intro-header">Make that step towards greatness</div>
                    <div className="intro-header">improve your business</div>
                    <span className="intro-button intro-button-hover" onClick={()=>{
                        history.push("/form");
                    }}>Contact us</span>
                    <div className="intro-back-button-style"/>
                </div>
            </div>
        </div>
    )
}
