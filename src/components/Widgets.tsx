import React, { useState } from 'react';
import { IonHeader, IonImg, IonItem, IonLabel, IonList, IonCard, IonTitle, IonNote, IonThumbnail, IonContent, IonPopover, IonInput, IonTextarea, IonModal, IonButton } from '@ionic/react';
import './Widgets.css';
import { tools } from './tools';
import { globalVar } from '../global/globalVar';
import { Link } from 'react-router-dom';


export const DropDownList = (props:any) =>{
    const nameCheck = (value:any) =>{
        if (value.name) return value.name;
        else if (value.title) return value.title;
        else return value;
    }
    return(
        <IonList hidden={props.hidden} id={props.id} className="header-drop-down-lists-main-container" onMouseLeave={()=>{
            if (props.onClose) props.onClose();
        }}>
            {props.value.map((list:any,key:any)=>(
                <IonLabel class="header-drop-down-list-item header-drop-down-list-item-hover" key={key} onClick={()=>{
                    if (props.onClick) props.onClick(list);
                    if (props.onClose) props.onClose();
                }}>{nameCheck(list)}</IonLabel>
            ))}
        </IonList>
    )
}

export const SuggestionBox = () =>{
    const [openSuggestion, setOpenSuggestion] = useState(false);
    const [showError, setShowError] = useState({state:false,msg:"",link: ""});
    const [mySuggestion, setMySuggestion] = useState({
        email: "",
        subject: "", 
        suggestion: ""
    });
    
    const sendSuggestion = (suggests:any) =>{
        if (!tools.isEmailValid(suggests.email)){
            setShowError({
                state:true,
                msg:`Email is invalid. Your email is use to send an email
                 to us as a regular email like you may use in `,
                link: "gmail.com"
            });
        }else if (!suggests.suggestion){
            setShowError({
                state:true,
                msg: "Plese provide your suggestion first and then click send",
                link: ""
            });
        }else{
            const emailData = {
                from: suggests.email,
                subject: suggests.subject,
                body: suggests.suggestion
            }
            tools.email.send(emailData);
        }
    }
    return(
        <>
        <ErrorBox 
            isOpen={showError.state} 
            onClose={()=>{setShowError({state:false,msg:"",link: ""})}} 
            msg={showError.msg}
            link={showError.link}
        />
        <IonModal isOpen={openSuggestion} onDidDismiss={()=>setOpenSuggestion(false)}>
            <IonList class="suggest-close-button-container">
                <IonLabel class="suggest-close-button suggest-hover" onClick={()=>{
                    setOpenSuggestion(false);
                }}>X</IonLabel>
            </IonList>
            <IonList class="suggest-container">
                <IonItem lines="none">
                    <IonLabel class="suggest-header">Suggestions</IonLabel>
                </IonItem>
                <IonList class="suggest-sub-header">
                    <IonNote>Tell us what you think and we will work on making it a reality.
                        we value your customers and will like for you to help us improve on our services.
                    </IonNote>
                </IonList>
                <IonList>
                    <IonLabel className="suggest-input-header">Email</IonLabel>
                    <IonInput class="suggest-input" onIonChange={(e)=>{
                        if (e.detail.value) setMySuggestion({
                            email: e.detail.value,
                            subject: mySuggestion.subject,
                            suggestion: mySuggestion.suggestion
                        });
                    }} placeholder="Your email..."/>
                </IonList>
                <IonList>
                    <IonLabel className="suggest-input-header">Subject</IonLabel>
                    <IonInput class="suggest-input" onIonChange={(e)=>{
                        if (e.detail.value) setMySuggestion({
                            email: mySuggestion.email,
                            subject: e.detail.value,
                            suggestion: mySuggestion.suggestion
                        });
                    }} placeholder="Your suggestion title..."/>
                </IonList>
                <IonList>
                    <IonLabel className="suggest-input-header">Suggestions</IonLabel>
                    <IonTextarea class="suggest-textarea" onIonChange={(e)=>{
                        if (e.detail.value) setMySuggestion({
                            email: mySuggestion.email,
                            subject: mySuggestion.subject,
                            suggestion: e.detail.value
                        });
                    }} placeholder="Type your message here..." rows={10}/>
                </IonList>
            </IonList>
            <IonItem lines="none">
                <IonList class="suggest-button-container">
                    <IonButton class="suggest-buttons" onClick={()=>{
                        setOpenSuggestion(false);
                    }}>Cancel</IonButton>
                    <IonButton class="suggest-buttons" onClick={()=>{
                        sendSuggestion(mySuggestion);
                    }}>Send</IonButton>
                </IonList>
            </IonItem>
        </IonModal>
        <IonButton hidden onClick={()=>{
            if (openSuggestion) setOpenSuggestion(false);
            else setOpenSuggestion(true);
        }} id={globalVar.id.suggestionPopup}/>
        </>
    )
}

export const ErrorBox = (data:any) =>{
    return(
        <IonPopover onDidDismiss={()=>{
            if (data.onClose) data.onClose();
        }} isOpen={data.isOpen}>
            <IonList class="error-box-container">
                <IonLabel class="error-box-msg">{data.msg || "No error message"}</IonLabel>
                <Link to="" onClick={()=>{tools.click.id("error-link")}}>{data.link}</Link>
            </IonList>
            <IonItem lines="none">
                <IonButton slot="end" onClick={()=>{
                    if (data.onClose) data.onClose();
                }} color="tertiary" fill="outline">Ok</IonButton>
            </IonItem>
            <IonButton id="error-link" hidden onClick={()=>{window.open(`http://${data.link}`)}}/>
        </IonPopover>
    )
}
