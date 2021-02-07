import { IonContent, IonHeader, IonLabel, IonPage, IonImg, IonThumbnail, IonSlide, IonSlides, IonTitle, IonToolbar, IonList, IonItem, IonCard, IonNote } from '@ionic/react';
import { lutimes } from 'fs';
import React, { useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { content } from '../components/Contents';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { images } from '../components/Images';
import { Promotion } from '../components/Promotion';
import { tools } from '../components/tools';
import './Benefits.css';

const Benefits: React.FC = () => {
    const PromoButton = () =>{
        return (
            <div className="benefits-promo-container">
                <Link to="/form">
                    <div className="benefits-promo-button benefits-promo-hover">WANT MORE INFORMATION?</div>
                </Link>
            </div>
        )
    }
    tools.pageTitle();
    return (
        <IonPage>
            <IonContent>
                <Header hidden={[content.objects.headerLists[4].name]} id="benefits"/>
                <IonList className="benefits-header">
                    <IonLabel>{content.objects.benefits.header}</IonLabel>
                </IonList>
                <div className="benefits-left-right-container">
                    <div className="benefits-left-container">
                        <div className="benefits-left-header">Business Tips</div>
                        <div className="benefits-left-sub-header">By GMCS</div>
                        <p>
                        In an era of social media, sometimes business owners 
                        may think that having a website is unnecessary, 
                        but that couldn’t be further away from the truth. 
                        It is relatively easy to create a social media 
                        profile such as Facebook, Instagram, Twitter, or LinkedIn. 
                        However, it is incredibly important to have a “home base” 
                        from which all your social accounts can link back to. 
                        As a matter of fact: VeriSign found that 84% of surveyed 
                        customers said they believed a business with a website is 
                        more credible than one with only a social media page.
                        </p>
                    </div>
                    <div className="benefits-right-container">
                        <IonThumbnail class="benefits-header-image">
                            <IonImg src={images.picture.benefits}/>
                        </IonThumbnail>
                        <PromoButton/>
                        {content.objects.benefits.list.map((info,key)=>(
                            <div className="benefits-content" key={key}>
                                <ul>
                                    <li>
                                        <IonLabel>{info.name}</IonLabel>
                                    </li>
                                </ul>
                            </div>
                        ))}
                        <PromoButton/>
                        <div>
                            {content.objects.benefits.more.map((info, index)=>(
                                <div className="benefits-more-container" key={index}>
                                    <div className="benefits-more-title">{info.title}</div>
                                    <IonNote className="benefits-more-content">{info.content}</IonNote>
                                </div>
                            ))}
                        </div>
                        <PromoButton/>
                    </div>
                </div>
                <Footer/>
            </IonContent>
        </IonPage>
    );
};

export default Benefits;
