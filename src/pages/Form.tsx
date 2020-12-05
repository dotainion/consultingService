import { IonHeader, IonImg, IonItem, IonLabel, IonList, IonTitle,IonThumbnail, IonCard, IonModal, IonContent, IonInput, IonButton, IonCardContent, IonTextarea, IonSelect, IonSelectOption, IonIcon, IonPage } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './Form.css';
import { tools } from '../components/tools';
import { DropDownList } from '../components/Widgets';
import { chevronDown } from 'ionicons/icons';
import { content } from '../components/Contents';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { images } from '../components/Images';

const Form: React.FC = () => {
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
    const onSubmit = (form:any) =>{
        if (tools.isEmailValid(form.email)){
            const mailConfig = {
                body: `
                    First Name: ${form.firstName}
                    Last Name: ${form.lastName}
                    Email: ${form.email}
                    Phone: ${form.phone}
                    Address: ${form.address}
                    Company: ${form.company}
                    Service: ${form.services}
                    Details: ${form.details}
                `
            }
            const compose = {
                from: form.email,
                subject: "GMCS Application",
                body: mailConfig.body
            }
            tools.email.send(compose);
        }else{
            console.log("invalid email address");
        }
    }
    return(
        <IonPage>
            <IonContent>
                <Header id="form"/>
                <IonList>
                    <IonCard class="form-main-container">
                        <IonItem lines="none"class="form-header-container">
                            <IonLabel className="form-header">Services</IonLabel>
                        </IonItem>
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
                                <IonButton color="tertiary" fill="outline" class="form-button" onClick={()=>{
                                    onSubmit(inputs);
                                }}>Submit</IonButton>
                                <IonButton color="tertiary" fill="outline" class="form-button" onClick={()=>{
                                    setInputs({
                                        firstName: "",lastName: "",email: "",
                                        phone: "",address: "",company: "",
                                        services: "",details: "",
                                    });
                                    setDropTextHolder({margin:"0px",color:"black"});
                                }}>Clear</IonButton>
                            </IonItem> 
                        </IonCardContent>
                    </IonCard>
                    <div className="form-side-info-container">
                        <div className="form-side-info-sub-container">
                            <IonThumbnail className="form-side-info-logo">
                                <IonImg src={images.picture.logo}/>
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
export default Form;