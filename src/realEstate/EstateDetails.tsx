import { IonIcon, IonImg, IonThumbnail } from '@ionic/react';
import { arrowForwardOutline, callSharp, closeOutline, mailSharp } from 'ionicons/icons';
import React from 'react';
import './EstateDetails.css';
import { FaMoneyCheckAlt, FaTags, FaSign, FaHome } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { tools } from '../components/tools';
import { globalVar } from '../global/globalVar';
import { useHistory } from 'react-router';


export const ViewDetails = ({state,info,onClose}:any) =>{
    const history = useHistory();
    tools.pageTitle();
    return(
        <div hidden={!state} className="view-detail-backdrop">
            <div className="view-detail-container">
                <IonIcon icon={closeOutline} onClick={()=>{
                    if (onClose) onClose();
                }} class="view-detail-close view-detail-close-hover"/>
                <div className="view-detail-sub-container">
                    <IonThumbnail className="view-detail-price-image">
                        <IonImg src={info?.image}/>
                    </IonThumbnail>
                    <div  className="view-detail-prices-flex-price-main-container">
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
                        <div className="view-detail-content-info">
                            <div><b>What we offer:</b></div>
                            <p>
                                GMCS Provides Prefabricated hardwood Ocean Front homes for persons that are
                                looking for an affordable property investment or a vacation home in the Caribbean.
                            </p>
                            <p>
                                We give you the option to design your home, the minimum allow is 450
                                square feet. The house is imported from Belize based on your design.
                            </p>
                            <p>
                                The lot of Ocean Font is available in 3000 and 5000 square feet.
                            </p>
                            <p>
                                The cost per square foot is US$98.00 or EC$260.00.
                            </p>
                            <p>
                                Our most affordable Ocean Front hardwood house (450 Square feet) starts at
                                EC$117,000.
                            </p>
                            <p>
                                Ocean front land is in St. Patrick, St. David and Carriacou
                            </p>
                        </div>
                    </div>
                </div>
                <div className="view-detail-bottom-info-container">
                    <div className="view-detail-bottom-info">
                        <label onMouseEnter={()=>{
                            let e = document.getElementById("view-bottom-icon");
                            if (e) e.style.visibility = "";
                        }} onMouseLeave={()=>{
                            let e = document.getElementById("view-bottom-icon");
                            if (e) e.style.visibility = "hidden";
                        }} onClick={()=>{
                            tools.state.set({other: "Not specified"});
                            history.push(globalVar.route.Form);
                        }}>
                            <label>Contact us today</label>
                            <IonIcon icon={arrowForwardOutline} style={{
                                visibility: "hidden"
                            }} id="view-bottom-icon"/>
                        </label>
                        
                        <div>
                            <IonIcon icon={callSharp}/>
                            <span>1 (479) 433-0839</span>
                            <IonIcon icon={mailSharp}/>
                            <span>gmcs473@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
