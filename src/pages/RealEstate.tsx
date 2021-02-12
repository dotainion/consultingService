import { IonCard, IonCardContent, IonContent, IonIcon, IonImg, IonList, IonPage, IonThumbnail } from '@ionic/react';
import { chevronBackOutline, chevronForwardOutline, homeOutline } from 'ionicons/icons';
import React, { useRef } from 'react';
import { content } from '../components/Contents';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { images } from '../components/Images';
import './RealEstate.css';
import { FcHome } from 'react-icons/fc';
import { RiHomeHeartFill } from 'react-icons/ri';
import { GiTreeSwing } from 'react-icons/gi';


const RealEstate: React.FC = () =>{
    const scrollRef = useRef<HTMLDivElement>(null);
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

    // help website https://www.trulia.com/
    return(
        <IonPage>
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
                                <div className="estate-home-get-button estate-home-get-button-hover">Find a home</div>
                            </div>
                            <div className="estate-home-get-header-sub-container">
                                <RiHomeHeartFill className="estate-home-get-icon"/>
                                <div className="estate-home-get-header">Rent a home</div>
                                <p>
                                    With eazy to navigate and easy to use interface, 
                                    GMCS can help you easily find a home or apartment for rent that you'll love.
                                </p>
                                <div className="estate-home-get-button estate-home-get-button-hover">Find a rental</div>
                            </div>
                            <div className="estate-home-get-header-sub-container">
                                <GiTreeSwing className="estate-home-get-icon"/>
                                <div className="estate-home-get-header">See neighborhoods</div>
                                <p>
                                    With more neighborhood insights than any other real estate website in grenada,
                                    we've captured the color and diversity of communities.
                                </p>
                                <div className="estate-home-get-button estate-home-get-button-hover">Learn more</div>
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
                                        <IonCard class="estate-card estate-card-hover" key={key}>
                                            <IonThumbnail class="estate-card-image">
                                                <IonImg src={estate.image}/>
                                            </IonThumbnail>
                                            <IonCardContent class="estate-card-content-container">
                                                <div>{estate.address}</div>
                                                <div>{estate.state}</div>
                                                <div style={{fontSize:"15px"}}>{estate.detail}</div>
                                                <div className="estate-card-view-button">{"View Neighborhood >"}</div>
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