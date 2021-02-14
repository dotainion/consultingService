import { IonCard, IonContent, IonIcon, IonImg, IonList, IonPage, IonThumbnail } from '@ionic/react';
import React from 'react';
import './Architechture.css';
import img1 from './images/pdf1.png';
import img2 from './images/pdf2.png';
import img3 from './images/pdf3.png';
import img4 from './images/pdf4.png';
import img5 from './images/pdf5.png';
import img6 from './images/pdf6.png';
import img7 from './images/pdf7.png';
import img8 from './images/pdf8.png';
import img9 from './images/pdf9.png';
import img10 from './images/pdf10.png';
import img11 from './images/pdf11.png';
import img12 from './images/pdf12.png';
import img13 from './images/pdf13.png';
import img14 from './images/pdf14.png';
import img15 from './images/pdf15.png';
import img16 from './images/pdf16.png';
import img17 from './images/pdf17.png';
import img18 from './images/pdf18.png';
import img19 from './images/pdf19.png';
import img20 from './images/pdf20.png';
import img21 from './images/pdf21.png';
import img22 from './images/pdf22.png';
import img23 from './images/pdf23.png';
import img24 from './images/pdf24.png';
import img25 from './images/pdf25.png';
import { closeOutline } from 'ionicons/icons';
import { images } from '../components/Images';

export const Architechture = ({state,onClose}:any) =>{
    const fileRenderer = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14,
        img15,
        img16,
        img17,
        img18,
        img19,
        img20,
        img21,
        img22,
        img23,
        img24,
        img25,
    ];
    return(
        <div hidden={!state} className="architechtrue-backdrop">
            <div>
                <IonIcon icon={closeOutline} onClick={()=>{
                    if (onClose) onClose();
                }} class="architechture-viewer-close architechture-viewer-close-hover"/>
                <div className="architechture-viewer-header">
                    <div>Architechtral Designs</div>
                    <p>
                        we build homes that are fast and affordable with the best design
                    </p>
                </div>
                <div className="architechture-left-info">
                    <div>
                        <h1>Customize your design</h1>
                        <img src={images.picture.woodenArch}/>
                        <p>
                            you can use our architechtrue design or have your own customize
                            to your specification.
                        </p>
                    </div>
                </div>
                <IonList class="architechture-viewer-container">
                    {fileRenderer.map((file:any, key:number)=>(
                        <IonCard className="architechture-viewer-card">
                            <IonThumbnail key={key} className="architechture-viewer-files">
                                <IonImg src={file}/>
                            </IonThumbnail>
                        </IonCard>
                    ))}
                </IonList>
            </div>
        </div>
    )
}

export default Architechture;