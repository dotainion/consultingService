import { IonHeader, IonImg, IonItem, IonLabel, IonList, IonTitle,IonThumbnail, IonCard, IonModal, IonContent, IonInput, IonButton, IonCardContent, IonTextarea, IonSelect, IonSelectOption, IonIcon, IonPage } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './Tests.css';
import { tools } from '../components/tools';
import { DropDownList, Loader } from '../components/Widgets';
import { chevronDown } from 'ionicons/icons';
import { content } from '../components/Contents';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { images } from '../components/Images';
import { globalVar } from '../global/globalVar';
import { ErrorBox } from '../components/Widgets';
import { addData } from '../auth/database';
import { useHistory } from 'react-router';


const Test: React.FC = () => {
    const [dropTextHolder, setDropTextHolder] = useState({margin: "", color: "black"});
    const [dropdown, setDropdown] = useState(false);
    const [borderStyle, setBorderStyle] = useState("");
    const [deviceTextLink, setDeviceTextLink] = useState("");
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState({state: false, msg: "",color: ""});
    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        company: "",
        services: "",
        details: "",
        other: ""
    });
    const clearinputs = () =>{
        setInputs({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            company: "",
            services: "",
            details: "",
            other: ""
        });
    }
    const updateInputs = (cmd:any, value:any) =>{
        setInputs({
            firstName: tools.compare(cmd,"f",value,inputs.firstName),
            lastName: tools.compare(cmd,"l",value,inputs.lastName),
            email: tools.compare(cmd,"e",value,inputs.email),
            phone: tools.compare(cmd,"p",value,inputs.phone),
            address: tools.compare(cmd,"a",value,inputs.address),
            company: tools.compare(cmd,"c",value,inputs.company),
            services: tools.compare(cmd,"s",value,inputs.services),
            details: tools.compare(cmd,"d",value,inputs.details),
            other: tools.compare(cmd,"o",value,inputs.other)
        })
    }
    const onSubmit = async(form:any) =>{
        if (tools.isEmailValid(form.email)){
            setLoader(true);
            const prospectData = {
                date: tools.time.getTodaysDate(),
                name: `${tools.titleCase(form.lastName)} ${tools.titleCase(form.firstName)}`,
                email: form.email.toLowerCase(),
                phone: form.phone,
                address: tools.titleCase(form.address),
                company: tools.titleCase(form.company),
                service: tools.titleCase(form.services),
                other: tools.titleCase(form.other),
                details: tools.titleCase(form.details)
            }
            const isSent = await addData(prospectData);
            if (isSent) setError({state: true, color: "green", msg: "Email Sent."});
            else setError({state: true, color: "red", msg: "Email was not sent, try again"});
            setLoader(false);
        }else{
            setError({state: true, color: "", msg: "invalid email address"});
        }
    }

    useEffect(()=>{
        const preValue = tools.state.get();
        if (preValue?.other) updateInputs("o",preValue?.other);
        else if (preValue?.title){
            updateInputs("s",preValue?.title);
            setDropTextHolder({margin:"-18px",color:"dodgerblue"});
            setBorderStyle("1px solid green");
        }
    });

    useEffect(()=>{
        setInterval(()=>{
            if (tools.isMobile()) setDeviceTextLink("Use Mobile App");
            else setDeviceTextLink("Use Desktop App");
        },1000);
    },[]);
    tools.pageTitle();
    return(
        <IonPage>
            <IonContent>
                <Header hidden={[content.objects.headerLists[5].name]} id="form"/>
                <Loader state={loader} onClose={()=>{setLoader(false)}}/>
                <ErrorBox 
                    isOpen={error.state} 
                    msg={error.msg}
                    color={error.color}
                    onClose={()=>{
                        setError({
                            state: false, 
                            msg: "",
                            color: ""
                        });
                        clearinputs();
                        setDropTextHolder({margin: "", color: "black"});
                    }}
                />
                <IonList>
                    <IonCard class="form-main-container">
                        <IonItem class="form-header-container" lines="none">
                            <IonLabel className="form-header">Send your mail to us</IonLabel>
                        </IonItem>
                        <div className="form-contact-container">
                            <IonLabel class="form-contact">{content.objects.contact.list[0].name}</IonLabel>
                            <IonLabel class="form-contact">{content.objects.contact.list[1].name}</IonLabel>
                            <IonLabel class="form-contact-link form-contact-hover" onClick={(e)=>{
                                e.preventDefault();
                                window.open(globalVar.siteUrl.gmail);
                            }}>Gmail.com</IonLabel>
                            <IonLabel class="form-contact-link form-contact-hover" onClick={(e)=>{
                                e.preventDefault();
                                window.open(`mailTo:${content.objects.contact.list[0].name}`,"_self");
                            }}>{deviceTextLink}</IonLabel>
                        </div>
                        <IonCardContent>
                            <div className="form-drop-down-container">
                                <DropDownList hidden={!dropdown} onClose={()=>{
                                    setDropdown(false);
                                }} onClick={(value:any)=>{
                                    setDropTextHolder({margin:"-18px",color:"black"});
                                    updateInputs("s",value.title);
                                }} value={content.objects.services.list}/>
                            </div>
                            <div className="form-input-container">
                                <IonItem class="form-input-sub-container" lines="none">
                                    <IonLabel class="form-input-floating-text" position="floating">First Name</IonLabel>
                                    <IonInput class="form-input" onIonChange={(e)=>{
                                        updateInputs("f",e.detail.value);
                                    }} value={inputs.firstName}/>
                                </IonItem>
                                <IonItem class="form-input-sub-container" lines="none">
                                    <IonLabel class="form-input-floating-text" position="floating">Last Name</IonLabel>
                                    <IonInput class="form-input" onIonChange={(e)=>{
                                        updateInputs("l",e.detail.value);
                                    }} value={inputs.lastName}/>
                                </IonItem>
                            </div>
                            <div className="form-input-container">
                                <IonItem class="form-input-sub-container" lines="none">
                                    <IonLabel class="form-input-floating-text" position="floating">Email</IonLabel>
                                    <IonInput class="form-input" onIonChange={(e)=>{
                                        updateInputs("e",e.detail.value);
                                    }} value={inputs.email}/>
                                </IonItem>
                                <IonItem class="form-input-sub-container" lines="none">
                                    <IonLabel class="form-input-floating-text" position="floating">Phone</IonLabel>
                                    <IonInput class="form-input" onIonChange={(e)=>{
                                        updateInputs("p",e.detail.value);
                                    }} value={inputs.phone}/>
                                </IonItem>
                            </div>
                            <IonItem class="form-input-sub-container" lines="none">
                                <IonLabel class="form-input-floating-text" position="floating">Address</IonLabel>
                                <IonInput class="form-input" onIonChange={(e)=>{
                                        updateInputs("a",e.detail.value);
                                    }} value={inputs.address}/>
                            </IonItem>
                            <IonItem class="form-input-sub-container" lines="none">
                                <IonLabel class="form-input-floating-text" position="floating">Company</IonLabel>
                                <IonInput class="form-input" onIonChange={(e)=>{
                                        updateInputs("c",e.detail.value);
                                    }} value={inputs.company}/>
                            </IonItem>
                            <div className="form-service-button-container" onClick={()=>{
                                setDropdown(true);
                                setBorderStyle("");
                                setDropTextHolder({margin:"-18px",color:"dodgerblue"});
                            }} onMouseLeave={()=>{
                                if (inputs.services.length <= 0) setDropTextHolder({margin:"0px",color:"black"});
                            }} style={{border:borderStyle}}>
                                <div className="form-service-button-sub-container">
                                    <IonLabel style={{marginTop:dropTextHolder.margin,color:dropTextHolder.color,position:"absolute"}}>Service Required</IonLabel>
                                    <div className="form-service-div-as-input">{inputs.services}</div>
                                </div>
                                <IonIcon class="form-down-icon" slot="end" icon={chevronDown}/>
                            </div>
                            <IonItem class="form-input-sub-container" lines="none">
                                <IonLabel class="form-input-floating-text" position="floating">Other</IonLabel>
                                <IonInput class="form-input" onIonChange={(e)=>{
                                        updateInputs("o",e.detail.value);
                                    }} value={inputs.other}/>
                            </IonItem>
                            <IonItem class="form-input-sub-container" lines="none"> 
                                <IonTextarea class="form-textarea" onIonChange={(e)=>{
                                    updateInputs("d",e.detail.value);
                                }} value={inputs.details} placeholder="Additional Details"/>
                            </IonItem>  
                            <IonItem class="form-button-container" lines="none"> 
                                <IonButton color="tertiary" fill="outline" class="form-button" onClick={()=>{
                                    onSubmit(inputs);
                                }}>Submit</IonButton>
                                <IonButton color="tertiary" fill="outline" class="form-button" onClick={()=>{
                                    setInputs({
                                        firstName: "",lastName: "",email: "",
                                        phone: "",address: "",company: "",
                                        services: "",details: "",other: ""
                                    });
                                    setDropTextHolder({margin:"0px",color:"black"});
                                }}>Clear</IonButton>
                            </IonItem> 
                        </IonCardContent>
                    </IonCard>
                    <div className="form-side-info-container">
                        <div className="form-side-info-promo-container">
                            <div className="form-side-info-promo-header">Let's meet</div>
                            <div>Schedule a meet to see how GMCS can help your business grow.</div>
                        </div>
                        <div className="form-side-info-sub-container">
                            <IonThumbnail className="form-side-info-logo">
                                <IonImg src={images.picture.buildingBlocks}/>
                            </IonThumbnail>
                            <IonList>
                                <IonLabel class="form-side-info-content">Working to build your business to its max.</IonLabel>
                            </IonList>
                        </div>
                    </div>
                </IonList>
                <Footer/>
            </IonContent>
        </IonPage>
    )
}
export default Test;