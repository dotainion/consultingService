import { IonHeader, IonImg, IonItem, IonLabel, IonList, IonTitle,IonThumbnail, IonCard, IonModal, IonContent, IonInput, IonButton, IonCardContent, IonTextarea, IonSelect, IonSelectOption, IonIcon } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './Form.css';
import { tools } from './tools';
import { DropDownList } from './Widgets';
import { chevronDown } from 'ionicons/icons';

export const Form = (props:any)=>{
    const [ifOpen, setIsOpen] = useState(false);
    const [dropTextHolder, setDropTextHolder] = useState({margin: "", color: "black"});
    const [dropdown, setDropdown] = useState(false);
    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        company: "",
        services: "",
        details: "",
    })
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
        })
    }
    const onSubmit = (values:any) =>{
        console.log(values);
    }
    return(
        <>
            <div hidden={!ifOpen} className="form-background-container">
                <div className="form-main-container">
                    <div className="form-header-and-close-container">
                        <div className="form-header">Services</div>
                        <div className="form-close form-close-hover" onClick={()=>{
                            setIsOpen(false);
                        }}>X</div>
                    </div>
                    <IonCardContent>
                        <div className="form-drop-down-container">
                            <DropDownList display={dropdown} onClose={()=>{
                                setDropdown(false);
                            }} onClick={(value:any)=>{
                                setDropTextHolder({margin:"-18px",color:"black"});
                                updateInputs("s",value);
                            }} value={tools.info.services.list}/>
                        </div>
                        <div className="form-input-container">
                            <IonItem class="form-input-sub-container" lines="none">
                                <IonLabel class="firm-input-floating-text" position="floating">First Name</IonLabel>
                                <IonInput class="form-input" onIonChange={(e)=>{
                                    updateInputs("f",e.detail.value);
                                }} value={inputs.firstName}/>
                            </IonItem>
                            <IonItem class="form-input-sub-container" lines="none">
                                <IonLabel class="firm-input-floating-text" position="floating">Last Name</IonLabel>
                                <IonInput class="form-input" onIonChange={(e)=>{
                                    updateInputs("l",e.detail.value);
                                }} value={inputs.lastName}/>
                            </IonItem>
                        </div>
                        <div className="form-input-container">
                            <IonItem class="form-input-sub-container" lines="none">
                                <IonLabel class="firm-input-floating-text" position="floating">Email</IonLabel>
                                <IonInput class="form-input" onIonChange={(e)=>{
                                    updateInputs("e",e.detail.value);
                                }} value={inputs.email}/>
                            </IonItem>
                            <IonItem class="form-input-sub-container" lines="none">
                                <IonLabel class="firm-input-floating-text" position="floating">Phone</IonLabel>
                                <IonInput class="form-input" onIonChange={(e)=>{
                                    updateInputs("p",e.detail.value);
                                }} value={inputs.phone}/>
                            </IonItem>
                        </div>
                        <IonItem class="form-input-sub-container" lines="none">
                            <IonLabel class="firm-input-floating-text" position="floating">Address</IonLabel>
                            <IonInput class="form-input" onIonChange={(e)=>{
                                    updateInputs("a",e.detail.value);
                                }} value={inputs.address}/>
                        </IonItem>
                        <IonItem class="form-input-sub-container" lines="none">
                            <IonLabel class="firm-input-floating-text" position="floating">Company</IonLabel>
                            <IonInput class="form-input" onIonChange={(e)=>{
                                    updateInputs("c",e.detail.value);
                                }} value={inputs.company}/>
                        </IonItem>
                        <div className="form-service-button-container" onClick={()=>{
                            setDropdown(true);
                            setDropTextHolder({margin:"-18px",color:"dodgerblue"});
                        }} onMouseLeave={()=>{
                            if (inputs.services.length <= 0) setDropTextHolder({margin:"0px",color:"black"});
                        }}>
                            <div className="form-service-button-sub-container">
                                <IonLabel style={{marginTop:dropTextHolder.margin,color:dropTextHolder.color,position:"absolute"}}>Service Required</IonLabel>
                                <div style={{marginTop:"5px"}}>{inputs.services}</div>
                            </div>
                            <IonIcon class="form-down-icon" slot="end" icon={chevronDown}/>
                        </div>
                        <IonItem class="form-input-sub-container" lines="none"> 
                            <IonTextarea class="form-textarea" onIonChange={(e)=>{
                                updateInputs("d",e.detail.value);
                            }} value={inputs.details} placeholder="Additional Details"/>
                        </IonItem>  
                        <IonItem class="form-button-container" lines="none"> 
                            <IonButton fill="outline" class="form-button" onClick={()=>{
                                onSubmit(inputs);
                            }}>Submit</IonButton>
                            <IonButton fill="outline" class="form-button" onClick={()=>{
                                setIsOpen(false);
                            }}>Cancel</IonButton>
                        </IonItem> 
                    </IonCardContent>
                </div>
            </div>
            <IonButton hidden onClick={()=>{
                if (ifOpen){
                    setIsOpen(false);
                    if (props.onClose) props.onClose();
                }
                else{
                    setIsOpen(true);
                    if (props.onOpen) props.onOpen();
                } 
            }} id="form-display-hander-id"/>
        </>
    )
}