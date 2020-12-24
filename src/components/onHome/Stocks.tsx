import React, { useEffect, useState } from 'react';
import { IonHeader, IonImg, IonItem, IonLabel, IonList, IonCard, IonTitle, IonNote, IonThumbnail, IonContent, IonIcon } from '@ionic/react';
import './Stocks.css';
import { tools } from '../tools';
import { content } from '../Contents';
import ReactPlayer from 'react-player';
import { useHistory } from 'react-router';
import { globalVar } from '../../global/globalVar';


export const Stocks = () =>{
    const history = useHistory();
    const [muted, setMuted] = useState(true);
    const [play, setPlay] = useState(true);

    useEffect(()=>{
        tools.element.isVisible("stocks-video-container",(mute:boolean)=>{
            setMuted(!mute)
        });
    },[]);
    
    useEffect(()=>{
        if (history.location.pathname === globalVar.route.Home) setPlay(true);
        else setPlay(false);
    });
    return(
        <div className="stocks-main-container">
            <div className="stocks-content-container">
                <div className="stocks-sub-container">
                    {content.objects.stocks.map((stockArray:any[], key:any)=>(
                        <div key={key}>
                            {stockArray.map((stock:any,key:any)=>(
                                <div className="stocks-container stocks-hover" key={key} onClick={()=>{
                                    if (stock.newTab) window.open(stock.route);
                                    else if (stock.newTab === null) tools.click.byId(stock.route);
                                    else history.push(stock.route); 
                                }}>
                                    <stock.icon className="stocks-image"/>
                                    <div className="stocks-title">{stock.title}</div>
                                    <div className="stocks-sub-title">{stock.subTitle}</div>
                                    <div className="stocks-content">{stock.content}</div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div id="stocks-video-container" className="stocks-video-container">
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=vlpKyLklDDY"//"https://youtu.be/luai0p0y2zE"
                    controls
                    playbackRate = {1}
                    width = "100%"
                    height = "100%"
                    playing = {play}
                    autoPlay = {true}
                    loop = {true}
                    muted = {muted}
                />
                <div className="stocks-video-contents">
                    <p className="stocks-video-texts">
                        Boost marketing ROI by elevating your brand creative, 
                        media and marketing technology to create great customer experiences.
                    </p>
                </div>
            </div>
        </div>
    )
}
