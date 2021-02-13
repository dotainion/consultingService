import { IonIcon, IonImg, IonThumbnail } from '@ionic/react';
import { closeOutline } from 'ionicons/icons';
import React from 'react';
import './EstateDetails.css';
import { FaMoneyCheckAlt, FaTags, FaSign, FaHome } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { tools } from '../components/tools';


export const ViewDetails = ({state,info,onClose}:any) =>{
    tools.pageTitle();
    return(
        <div hidden={!state} className="view-detail-backdrop">
            <div className="view-detail-container">
                <IonIcon icon={closeOutline} onClick={()=>{
                    if (onClose) onClose();
                }} class="view-detail-close view-detail-close-hover"/>
                <div style={{display:"flex",position:"relative"}}>
                    <IonThumbnail style={{width:"50%",height:"auto"}}>
                        <IonImg src={info?.image}/>
                    </IonThumbnail>
                    <div style={{width:"50%"}}>
                        <div className="view-detail-price-header">Neighborhood Overview</div>
                        <div className="view-detail-prices-flex">
                            <div>
                                <div className="view-detail-price-container">
                                    <FaTags className="view-detail-icon"/>
                                    <span>
                                        <div>Buy</div>
                                        <div>$100k-$500k</div>
                                    </span>
                                </div>
                                <div className="view-detail-price-container">
                                    <FaMoneyCheckAlt className="view-detail-icon"/>
                                    <span>
                                        <div>Rent</div>
                                        <div>$100k-$500k</div>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <div className="view-detail-price-container view-detail-price-container-hover">
                                    <FaSign className="view-detail-icon"/>
                                    <span>
                                        <div>For Sale</div>
                                        <span>homes</span>
                                        <BsArrowRight className="view-detail-icon-2"/>
                                    </span>
                                </div>
                                <div className="view-detail-price-container view-detail-price-container-hover">
                                    <FaHome className="view-detail-icon"/>
                                    <span>
                                        <div>For Rent</div>
                                        <span>homes</span>
                                        <BsArrowRight className="view-detail-icon-2"/>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
