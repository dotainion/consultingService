import React, { useEffect, useState } from 'react';
import { IonHeader, IonImg, IonItem, IonLabel, IonList, IonCard, IonTitle, IonNote, IonThumbnail, IonContent, IonIcon } from '@ionic/react';
import './Stocks.css';
import { tools } from '../tools';
import { content } from '../Contents';
import ReactPlayer from 'react-player';


export const Stocks = () =>{
    return(
        <div className="stocks-main-container">
            <div className="stocks-content-container">
                <div className="stocks-sub-container">
                    {content.objects.stocks[0].map((stock:any, key:any)=>(
                        <div className="stocks-container stocks-hover">
                            <stock.icon className="stocks-image"/>
                            {/*<img className="stocks-image" src={stock.icon}/>*/}
                            <div className="stocks-title">{stock.title}</div>
                            <div className="stocks-sub-title">{stock.subTitle}</div>
                            <div className="stocks-content">{stock.content}</div>
                        </div>
                    ))}
                </div>
                <div className="stocks-sub-container">
                    {content.objects.stocks[1].map((stock:any, key:any)=>(
                        <div className="stocks-container stocks-hover">
                            <stock.icon className="stocks-image"/>
                            {/*<img className="stocks-image" src={stock.icon}/>*/}
                            <div className="stocks-title">{stock.title}</div>
                            <div className="stocks-sub-title">{stock.subTitle}</div>
                            <div className="stocks-content">{stock.content}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="stocks-video-container">
                <ReactPlayer
                    url="https://youtu.be/luai0p0y2zE"
                    controls
                    playbackRate = {2}
                    width = "100%"//"400px"
                    height = "100%"//"300px"
                />
                <div className="stocks-video-contents">
                    Boost marketing ROI by elevating your brand creative, 
                    media and marketing technology to create great customer experiences.
                </div>
            </div>
        </div>
    )
}
