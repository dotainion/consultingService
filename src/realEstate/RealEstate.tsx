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
import Architechture from './Architechture';
import { BsChevronDoubleDown, BsChevronDoubleUp } from 'react-icons/bs';


let index = 0;
let interval:any = null;
const RealEstate: React.FC = () =>{
    const history = useHistory();
    const objectiveRef = useRef<HTMLDivElement>(null) as any;
    const scrollRef = useRef<HTMLDivElement>(null);
    const [openArchitech, setOpenArchitech] = useState(false);
    const [openVission, setOpenVission] = useState(false);
    const [openObjective, setOpenObjective] = useState({
        isOpen: false,
        text: "What exactly we do?",
        icon: BsChevronDoubleDown
    });
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

    const animateHeight = () =>{
        if (openObjective.isOpen){
            setOpenObjective({
                isOpen: false, 
                text: "What is it we do?",
                icon: BsChevronDoubleDown
            });
            index = 50;
            interval = setInterval(()=>{
                index --;
                objectiveRef.current.style.height = `${index}%`;
                if (index <= 0){
                    index = 0;
                    clearInterval(interval);
                    objectiveRef.current.style.paddingBottom = "0px";
                    objectiveRef.current.style.height = `${index}%`;
                }
            },5);
        }else{
            setOpenObjective({
                isOpen: true, 
                text: "Close objective",
                icon: BsChevronDoubleUp
            });
            index = 0;
            interval = setInterval(()=>{
                index ++;
                objectiveRef.current.style.height = `${index}%`;
                if (index >= 50){
                    index = 50;
                    clearInterval(interval);
                    objectiveRef.current.style.paddingBottom = "10px";
                    objectiveRef.current.style.height = "auto";
                }
            },5);
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

            <Architechture 
                state={openArchitech}
                onClose={()=>{
                    setOpenArchitech(false);
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
                                <div className="estate-header-button estate-header-button-hover" onClick={()=>{
                                    history.push(globalVar.route.Form);
                                }}>Investment Opportunity<div style={{fontSize:"15px"}}>(Contact us today)</div></div>
                                {/* more button can be added, will be place horizontally and hover change */}
                            </div>
                        </div>
                        <div className="estate-header-button-architecture estate-header-button-architecture-hover" onClick={()=>{
                            setOpenArchitech(true);
                        }}>Architecture</div>
                    </div>

                    <div ref={objectiveRef} className="estate-objective">
                        <div>Our Objective</div>
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
                        <p>
                            HARDWOOD DESCRIPTION: see <b>"Your Vission then Material"</b> just bellow this content.
                        </p>
                    </div>

                    <div onClick={()=>{
                        animateHeight(); 
                    }} className="estate-objective-button estate-objective-button-hover">
                        <span>{openObjective.text}</span>
                        <openObjective.icon/>
                    </div>

                    <div className="estate-home-get-header-main-container">
                        <div>Let's see how GMCS can help you</div>
                        <div className="estate-home-get-header-container">
                            <div className="estate-home-get-header-sub-container">
                                <FcHome className="estate-home-get-icon"/>
                                <div className="estate-home-get-header">Buy a home</div>
                                <p>
                                    aS available on the website, 
                                    or customize your own design.
                                    GMCS can match you with a house you will want to call home.
                                </p>
                                <div onClick={()=>{
                                    tools.state.set({other: "Find a home"});
                                    history.push(globalVar.route.Form);
                                }} className="estate-home-get-button estate-home-get-button-hover">Find a home</div>
                            </div>
                            {/*<div className="estate-home-get-header-sub-container">
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
                            </div>*/}
                            <div className="estate-home-get-header-sub-container">
                                <GiTreeSwing className="estate-home-get-icon"/>
                                <div className="estate-home-get-header">Your Vission</div>
                                <p>
                                    Buy a home build for your comfort. 
                                    Homes are affordable and built with hardwood that gurantee to last.
                                    
                                </p>
                                <div onClick={()=>{
                                    setOpenVission(true);
                                }} className="estate-home-get-button estate-home-get-button-hover">Learn more</div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="estate-card-above-header">Explore neighborhoods in Grenada:</div>
                        <div className="estate-card-above-sub-header">
                            Browse original photos, and or drone footage, 
                            to see if the locations are right for you.
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