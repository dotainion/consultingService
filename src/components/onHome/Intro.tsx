import React, { useEffect, useState } from 'react';
import { IonHeader, IonImg, IonItem, IonLabel, IonList, IonCard, IonTitle, IonNote, IonThumbnail, IonContent } from '@ionic/react';
import './Intro.css';
import { tools } from '../tools';
import ReactPlayer from 'react-player';
import { images } from '../Images';
import { useHistory } from 'react-router';
import { globalVar } from '../../global/globalVar';
import { FaPlay } from 'react-icons/fa';


export const Intro = () =>{
    const history = useHistory();
    const [muted, setMuted] = useState(true);
    const [play, setPlay] = useState(true);

    useEffect(()=>{
        tools.slide.setId("intro-vedio-slide",(mute:boolean)=>{
            setMuted(mute);
        },400);
    },[]);
    
    useEffect(()=>{
        if (history.location.pathname === globalVar.route.Home) setMuted(false);
        else setMuted(true);
    });
    return(
        <div className="intro-main-container">
            <IonThumbnail class="intro-thumbnail-container">
                <IonImg src={images.picture.consulter}/>
                <div id="intro-vedio-slide" className="intro-vedio-container">
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=m1M2y3UgNWw:"//"https://youtu.be/luai0p0y2zE"
                        controls
                        playbackRate = {1}
                        width = "100%"
                        height = "100%"
                        playing = {play}
                        autoPlay = {true}
                        loop = {true}
                        muted = {muted}
                    />
                </div>
                <div className="intro-play-button intro-play-button-hover" onClick={()=>{
                    setPlay(true);
                }} hidden={play}>
                    <FaPlay/>
                </div>
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

