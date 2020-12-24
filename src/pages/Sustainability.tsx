import { IonContent, IonHeader, IonLabel, IonPage, IonImg, IonThumbnail, IonSlide, IonSlides, IonTitle, IonToolbar, IonList, IonItem } from '@ionic/react';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ContactButton } from '../components/ContactButton';
import { content } from '../components/Contents';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Promotion } from '../components/Promotion';
import { globalVar } from '../global/globalVar';
import './Sustainability.css';

const Sustainability: React.FC = () => {
    const history = useHistory();
    return (
        <IonPage>
            <IonContent>
                <Header id="sustainability"/>
                <div className="sustainability-container">
                    <div className="sustainability-header">
                        <IonLabel>Sustainability Business Development</IonLabel>
                    </div>
                    <div className="sustainability-sub-header">
                        <IonLabel>Resources from building a fully successful business</IonLabel>
                    </div>
                    <div className="">
                        {content.objects.sustainability.list.map((value, key)=>(
                            <div className="sustainability-item-container" key={key}>
                                <div className="sustainability-rounds">
                                    <span className="sustainability-rounds-child">{value.valuesAmount}</span>
                                </div>
                                <p className="sustainability-values">{value.values}</p>
                                <span className="sustainability-link sustainability-hover" onClick={()=>{
                                    history.push(value.link);
                                }}>{value.linkName}</span>
                            </div>
                        ))}
                    </div>
                    <div className="sustainability-tag-container">
                        <div className="sustainability-tag-left-container">
                            <div>GMCS</div>
                            <p>Contact us for sustainability</p>
                            <p>We'll guide you in creating a sustainable business</p>
                        </div>
                        <div className="sustainability-tag-right-container">
                            <div className="sustainability-tag-right-button sustainability-tag-hover sustainability-tag-click" onClick={()=>{
                                history.push(globalVar.route.Form);
                            }}>Want more information?</div>
                            <div className="sustainability-tag-button-shadow"/>
                        </div>
                    </div>
                </div>
                <div className="sustainability-info-container">
                    <span className="sustainability-info-header">Objective:</span>
                    <ol>
                        <p>{content.objects.sustainability.objective}</p>
                        <p>{content.objects.sustainability.reason}</p>
                    </ol>
                </div>
                <ContactButton/>
                <Promotion/>
                <ContactButton/>
                <Footer/>
            </IonContent>
        </IonPage>
    );
};

export default Sustainability;
