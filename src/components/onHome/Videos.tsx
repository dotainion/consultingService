import React, { useEffect, useState } from 'react';
import { IonHeader, IonImg, IonItem, IonLabel, IonList, IonCard, IonTitle, IonNote, IonThumbnail, IonContent } from '@ionic/react';
import './Videos.css';
import ReactPlayer from 'react-player';


export const Videos = () =>{
    return(
        <div className="video-main-container">
            <div className="video-sub-container">
                <div className="video-left-container">
                    <p className="video-header">Boost marketing ROI by elevating your brand creative, 
                        media and marketing technology to create great customer experiences.</p>
                </div>
                <div className="video-right-container">
                    <ReactPlayer
                        url="https://youtu.be/luai0p0y2zE"
                        controls
                        playbackRate = {2}
                        width = "400px"
                        height = "300px"
                    />
                    <span className="video-more-button video-more-hover">MORE...</span>
                </div>
            </div>
        </div>
    )
}