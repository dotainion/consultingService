import { IonIcon, IonImg, IonThumbnail } from '@ionic/react';
import { closeOutline } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { images } from '../Images';
import './EstateAdvert.css';
import { tools } from '../../components/tools';
import { useHistory } from 'react-router';
import { globalVar } from '../../global/globalVar';


let isLarge = false;
const tokenRef = "estate-popup";
const token = tools.token;
export const EstateAdvertise = () =>{
    const history = useHistory();
    const [hide, setHide] = useState(true);
    const [hideBtn, setHideBtn] = useState(false);
    const [enlarge, setEnlarge] = useState({
        top: "", left: "", width: "", transform: "",
        backdrop: {width: "", height: "", position: ""}
    } as any);
    const makeLarger = (large=true) =>{
        setEnlarge({
            container: tools.compare(large,false,"","estate-advert-container-2"),
            backdrop: tools.compare(large,false,"","estate-advert-backdrop-2")
        });
        isLarge = large;
    }
    useEffect(()=>{
        if (!token.isActive(tokenRef)){
            setHide(false);
        }
    },[]);
    return(
        <div hidden={hide} className={`estate-advert-backdrop ${enlarge.backdrop}`}>
            <div onClick={()=>{
                makeLarger();
                setHideBtn(true);
            }} className={`estate-advert-container estate-hover ${enlarge.container}`}>
                <IonIcon icon={closeOutline} onClick={(e)=>{
                    e.stopPropagation();
                    if (!isLarge){
                        setHide(true);
                        token.set(tokenRef);
                    } 
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
                        history.push(globalVar.route.PropertyDevelper);
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

