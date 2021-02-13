import { IonCard, IonCardContent, IonContent, IonIcon, IonImg, IonList, IonPage, IonThumbnail } from '@ionic/react';
import { chevronBackOutline, chevronForwardOutline, homeOutline } from 'ionicons/icons';
import React, { useRef, useState } from 'react';
import { content } from '../components/Contents';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { images } from '../components/Images';
import './RealEstate.css';
import { FcHome } from 'react-icons/fc';
import { RiHomeHeartFill } from 'react-icons/ri';
import { GiTreeSwing } from 'react-icons/gi';
import { ViewDetails } from './EstateDetails';
import { globalVar } from '../global/globalVar';
import { useHistory } from 'react-router';
import { SeeVission } from './SeeVission';
import { tools } from '../components/tools';



const RealEstate: React.FC = () =>{
    const history = useHistory();
    const scrollRef = useRef<HTMLDivElement>(null);
    const [openVission, setOpenVission] = useState(false);
    const [openViewDetail, setOpenViewDetail] = useState({
        state: false,
        data: null
    } as any);

    const scrollTo = (direction: any) =>{
        const refs = scrollRef.current;
        if (refs){
            if (direction === "left"){
                refs.scrollLeft -= refs.clientWidth;
            }else if (direction === "right"){
                refs.scrollLeft += refs.clientWidth;
            }
        }
    }
    tools.pageTitle();
    // help website https://www.trulia.com/
    return(
        <IonPage>
            <ViewDetails 
                state={openViewDetail.state} 
                info={openViewDetail.data}
                onClose={()=>{
                    setOpenViewDetail({
                        state: false,
                        data: null
                    });
                }}
            />

            <SeeVission
                state={openVission}
                onClose={()=>{
                    setOpenVission(false);
                }}
            />

            <IonContent>
                <Header hidden={[content.objects.headerLists[6].name]} id="real-estate"/>
                    <div className="estate-header-container">
                        <IonThumbnail className="estate-header-image">
                            <IonImg src={images.picture.estateHeader}/>
                        </IonThumbnail>
                        <div className="estate-header-info-container">
                            <div>Discover a place</div>
                            <div>you'll love to live</div>
                            <div className="estate-header-button-container">
                                <div className="estate-header-button estate-header-button-hover">Buy</div>
                                <div className="estate-header-button estate-header-button-hover">Rent</div>
                                <div className="estate-header-button estate-header-button-hover">Sold</div>
                            </div>
                        </div>
                        <div className="estate-header-button-architecture estate-header-button-architecture-hover" onClick={()=>{
                            history.push(globalVar.route.Architechture);
                        }}>Architecture</div>
                    </div>

                    <div className="estate-home-get-header-main-container">
                        <div>Lest see how GMCS can help you</div>
                        <div className="estate-home-get-header-container">
                            <div className="estate-home-get-header-sub-container">
                                <FcHome className="estate-home-get-icon"/>
                                <div className="estate-home-get-header">Buy a home</div>
                                <p>
                                    With the homes thats available on the website, 
                                    Gmcs can match you with a house you will want to call home.
                                </p>
                                <div onClick={()=>{
                                    tools.state.set({other: "Find a home"});
                                    history.push(globalVar.route.Form);
                                }} className="estate-home-get-button estate-home-get-button-hover">Find a home</div>
                            </div>
                            <div className="estate-home-get-header-sub-container">
                                <RiHomeHeartFill className="estate-home-get-icon"/>
                                <div className="estate-home-get-header">Rent a home</div>
                                <p>
                                    With eazy to navigate and easy to use interface, 
                                    GMCS can help you easily find a home or apartment for rent that you'll love.
                                </p>
                                <div onClick={()=>{
                                    tools.state.set({other: "Find a rental"});
                                    history.push(globalVar.route.Form);
                                }} className="estate-home-get-button estate-home-get-button-hover">Find a rental</div>
                            </div>
                            <div className="estate-home-get-header-sub-container">
                                <GiTreeSwing className="estate-home-get-icon"/>
                                <div className="estate-home-get-header">Your Vission</div>
                                <p>
                                    Buy, rent or have a home built for your comfort. Homes are build with hard wood
                                    that guarantee to last and afordable and fast.
                                </p>
                                <div onClick={()=>{
                                    setOpenVission(true);
                                }} className="estate-home-get-button estate-home-get-button-hover">Learn more</div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="estate-card-above-header">Explore neighborhoods in Grenada</div>
                        <div className="estate-card-above-sub-header">
                            Take a deep dive and browse original photos,
                            and or drone footage, resident reviews and local insights to see 
                            if the homes for sale are right for you.
                        </div>
                        <div style={{position:"relative"}}>
                            <div ref={scrollRef} className="estate-card-container">
                                {
                                    content.objects.realEstate.map((estate, key)=>(
                                        <IonCard key={key} onMouseEnter={()=>{
                                            const el = document.getElementById(`${estate}${key}estate-list`);
                                            if (el) el.hidden = false;
                                        }} onMouseLeave={()=>{
                                            const el = document.getElementById(`${estate}${key}estate-list`);
                                            if (el) el.hidden = true;
                                        }} onClick={()=>{
                                            setOpenViewDetail({state:true,data:estate});
                                        }} class="estate-card estate-card-hover">
                                            <IonThumbnail class="estate-card-image">
                                                <IonImg src={estate.image}/>
                                            </IonThumbnail>
                                            <IonCardContent class="estate-card-content-container">
                                                <div>{estate.address}</div>
                                                <div>{estate.state}</div>
                                                <div style={{fontSize:"15px"}}>{estate.detail}</div>
                                                <div hidden id={`${estate}${key}estate-list`} onClick={(e)=>{
                                                    e.stopPropagation();
                                                    setOpenViewDetail({state:true,data:estate});
                                                }} className="estate-card-view-button estate-card-view-button-hover">View detail</div>
                                            </IonCardContent>
                                        </IonCard>
                                    ))
                                }
                            </div>
                            <IonIcon onClick={()=>{
                                scrollTo("left");
                            }} class="estate-card-back-nav estate-card-back-nav-hover" icon={chevronBackOutline}/>
                            <IonIcon onClick={()=>{
                                scrollTo("right");
                            }} class="estate-card-forward-nav estate-card-back-nav-hover" icon={chevronForwardOutline}/>
                        </div>
                    </div>
                <Footer/>
            </IonContent>
        </IonPage>
    )
}

export default RealEstate;