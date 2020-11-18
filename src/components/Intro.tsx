import { IonHeader, IonImg, IonItem, IonLabel, IonList, IonTitle,IonThumbnail, IonCard, IonContent, IonCardContent, IonNote } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './Intro.css';
import img from '../images/image.jpg';
import img1 from '../images/image1.jpg';
import img2 from '../images/image2.jpg';
import img3 from '../images/image3.jpg';
import img4 from '../images/image4.jpg';
import { tools } from './tools';
import { Form } from './Form';


export const Introduction = () =>{
    const images = [img,img1,img2,img3,img4];
    const [slider, setSlider] = useState(images[0]);

    let index = 0;
    const sliderAuto = () =>{
        setTimeout(()=>{
            setSlider(images[index]);
            sliderAuto();
            if (index === images.length-1) index = 0;
            else index ++;
        },3000)
    }

    useEffect(()=>{
        sliderAuto();
    },[]);
    return(
        <div className="intro-main-container">
            <IonThumbnail class="intro-thumbnail-container">
                <IonImg className="intro-background-image" src={slider}/>
            </IonThumbnail>
            <div className="intro-info-content-container">
                <div className="intro-info-content-sub-container">
                    <label className="intro-content-title">{tools.info.intro.title}</label>
                    <p className="intro-content-sub-title">{tools.info.intro.content}</p>
                </div>
                <div className="intro-button intro-button-hover" onClick={()=>{
                    tools.open.form();
                }}>Contact us</div>
            </div>
        </div>
    )
}