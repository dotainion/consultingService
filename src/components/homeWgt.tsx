import React, { useEffect, useState } from 'react';
import { IonHeader, IonImg, IonItem, IonLabel, IonList, IonCard, IonTitle, IonNote, IonThumbnail, IonContent } from '@ionic/react';
import './HomeWgt.css';
import { tools } from './tools';
import img from '../images/image.jpg';
import img1 from '../images/image1.jpg';
import img2 from '../images/image2.jpg';
import img3 from '../images/image3.jpg';
import img4 from '../images/image4.jpg';
import roundTable from '../images/roundTable.jpg';
import ReactPlayer from 'react-player';

export const Intro = () =>{
    return(
        <div className="widget-main-container">
            <IonThumbnail class="widget-thumbnail-container">
                <IonImg src={roundTable}/>
            </IonThumbnail>
            <div className="widget-sub-container">
                <div className="widget-content-container">
                    <div className="widget-header" style={{textShadow:"1px 1px 1px gray"}}>{tools.info.intro.title}</div>
                </div>
            </div>
        </div>
    )
}
export const Pricing = () =>{
    return(
        <div className="widget-main-container margin-top">
            <div className="widget-config-container bg-fg-color">
                <div className="widget-content-container">
                    <div className="widget-header">{tools.info.pricing.header}</div>
                </div>
            </div>
        </div>
    )
}
export const Benefits = () =>{
    return(
        <div className="widget-main-container margin-top">
            <div className="widget-config-container bg-fg-color1">
                <div className="widget-content-container">
                    <div className="widget-header">{tools.info.benefits.header}</div>
                </div>
            </div>
        </div>
    )
}
export const Videos = () =>{
    return(
        <div className="widget-main-container margin-top">
            <div className="widget-video-container">
                <div className="widget-video-left-sub">
                    <p className="widget-header">Boost marketing ROI by elevating your brand creative, 
                        media and marketing technology to create great customer experiences.</p>
                </div>
                <div className="widget-video-right-sub">
                    <ReactPlayer
                        url="https://youtu.be/luai0p0y2zE"
                        controls
                        playbackRate = {2}
                        width = "400px"
                        height = "300px"
                    />
                    <div className="widget-video-more-button widget-item-hover">MORE...</div>
                </div>
            </div>
        </div>
    )
}