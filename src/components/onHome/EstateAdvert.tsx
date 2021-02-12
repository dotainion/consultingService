import { IonIcon, IonImg, IonItem, IonLabel, IonList, IonThumbnail } from '@ionic/react';
import { closeOutline, homeOutline } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { images } from '../Images';
import './EstateAdvert.css';
import { BsBuilding } from 'react-icons/bs';
import { tools } from '../../components/tools';
import { truncate } from 'fs';
import { useHistory } from 'react-router';
import { globalVar } from '../../global/globalVar';
import { updateSpreadAssignment } from 'typescript';


let isLarge = false;
export const EstateAdvertise = () =>{
    const history = useHistory();
    const [hide, setHide] = useState(false);
    const [hideBtn, setHideBtn] = useState(false);
    const [enlarge, setEnlarge] = useState({
        top: "", left: "", width: "", transform: "",
        backdrop: {width: "", height: "", position: ""}
    } as any);
    const makeLarger = (large=true) =>{
        setEnlarge({
            top: tools.compare(large,false,"","20px"),
            left: tools.compare(large,false,"","50%"),
            width: tools.compare(large,false,"","50%"),
            transform: tools.compare(large,false,"","translateX(-50%)"),
            animation: tools.compare(large,false,"multiColor2 1s infinite linear","none"),
            border: tools.compare(large,false,"","1px solid transparent"),
            backdrop: {
                width: tools.compare(large,false,"","100%"),
                height: tools.compare(large,false,"","100vh"),
                position: tools.compare(large,false,"","relative")
            }
        });
        isLarge = large;
    }
    return(
        <div hidden={hide} style={enlarge.backdrop} className="estate-advert-backdrop">
            <div style={enlarge} onClick={()=>{
                makeLarger();
                setHideBtn(true);
            }} className="estate-advert-container estate-hover">
                <IonIcon icon={closeOutline} onClick={(e)=>{
                    e.stopPropagation();
                    if (!isLarge) setHide(true);
                    setHideBtn(false);
                    makeLarger(false);
                }} class="estate-advert-close estate-advert-close-hover"/>
                <div className="estate-advert-header">Real Estate</div>
                <IonThumbnail class="estate-advert-image">
                    <IonImg src={images.picture.estateBeach}/>
                    <div hidden={!hideBtn} onClick={(e)=>{
                        e.stopPropagation();
                        setHideBtn(false);
                        makeLarger(false);
                        history.push(globalVar.route.RealEstate);
                    }} className={
                        `estate-advert-view-more
                        estate-advert-view-more-click
                        estate-advert-view-more-hover`
                    }>View More</div>
                    <div hidden={!hideBtn} className="estate-advert-shadow"/>
                </IonThumbnail>
            </div>
        </div>
    )
}

