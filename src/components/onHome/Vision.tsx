import React, { useEffect, useState } from 'react';
import { IonHeader, IonImg, IonItem, IonLabel, IonList, IonCard, IonTitle, IonNote, IonThumbnail, IonContent } from '@ionic/react';
import './Vision.css';
import { tools } from '../tools';
import { images } from '../Images';


export const Vision = () =>{
    return(
        <div className="vision-main-container">
            <div className="vision-image-container">
                <img className="vision-image" src={images.picture.planning}/>
            </div>
            <div className="vision-content-container">
                <div className="vision-content-header">Our Vision</div>
                <p>
                    Grenada management consulting service vision is to be the leading provider 
                    of quality business consultancy and support services leading to the 
                    development of profitable and sustainable enterprises in the Caribbean Region.
                </p>
                <p>
                    The guiding principles and core values of our team of professionals are:
                </p>
                <ul>
                    <li><span className="vision-capital-letter">A</span>ccountability</li>
                    <li><span className="vision-capital-letter">R</span>espect </li>
                    <li><span className="vision-capital-letter">I</span>ntegrity </li>
                    <li><span className="vision-capital-letter">S</span>ervice Excellence </li>
                    <li><span className="vision-capital-letter">E</span>fficiency </li>
                </ul>
                <span>in all our business transactions.</span>
                <div className="vision-button vision-hover" onClick={()=>{
                    tools.open.form();
                }}>Contact Us</div>
                <div className="vision-button-back-style"/>
            </div>
            <div className="vision-info-count-main-container">
                <div className="vision-info-count-container">
                    <div className="vision-info-count-sub-container">
                        <div className="vision-info-count">30+</div>
                        <div>Years of Experience</div>
                    </div>
                    <div className="vision-info-count-sub-container">
                        <div className="vision-info-count">10+</div>
                        <div>Happy Clients</div>
                    </div>
                </div>
            </div>
        </div>
    )
}