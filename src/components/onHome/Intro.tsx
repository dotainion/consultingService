import React, { useEffect, useRef, useState } from 'react';
import { IonHeader, IonImg, IonItem, IonLabel, IonList, IonCard, IonTitle, IonNote, IonThumbnail, IonContent, IonSlides, IonSlide } from '@ionic/react';
import './Intro.css';
import { tools } from '../tools';
import ReactPlayer from 'react-player';
import { images } from '../Images';
import { useHistory } from 'react-router';
import { globalVar } from '../../global/globalVar';


const slideOptions = {
    initialSlide: 1,
    speed: 400,
    autoplay: {
        delay: 142000
    }
};

export const Intro = () =>{
    const history = useHistory();
    const [play, setPlay] = useState(true);
    const [muted, setMuted] = useState(false);

    useEffect(()=>{
        if (history.location.pathname !== globalVar.route.Home){
            setPlay(false);
            setMuted(true);
        }else setMuted(false);
    });
    return(
        <div className="intro-main-container">
            <IonList class="intro-image-video-container">
                <IonSlides 
                    pager={true} 
                    options={slideOptions} 
                    id="slide" 
                    class="intro-slider-container"
                    onIonSlideWillChange={()=>{
                        tools.element.isVisible("intro-player-viewport",(state:any)=>{
                            if (state) setPlay(true);
                            else setPlay(false);
                        })
                    }}
                >
                    <IonSlide>
                        <IonThumbnail class="intro-thumbnail">
                            <IonImg src={images.picture.consulter}/>
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
                    </IonSlide>
                    <IonSlide>
                        <div id="intro-player-viewport" style={{width:"100%",height:"100%"}}>
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=m1M2y3UgNWw:"//"https://youtu.be/luai0p0y2zE"
                                playbackRate = {1}
                                width = "100%"
                                height = "100%"
                                playing = {play}
                                autoPlay = {true}
                                loop = {true}
                                muted = {muted}
                                onPlay={()=>{
                                    
                                }}
                                onEnded={()=>{
                                    
                                }}
                            />
                        </div>
                    </IonSlide>
                </IonSlides>
            </IonList>
        </div>
    )
}

