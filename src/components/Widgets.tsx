import React, { useState } from 'react';
import { IonHeader, IonImg, IonItem, IonLabel, IonList, IonCard, IonTitle, IonNote, IonThumbnail, IonContent, IonPopover, IonInput, IonTextarea, IonModal, IonButton, IonAlert, IonIcon, IonLoading } from '@ionic/react';
import './Widgets.css';
import { tools } from './tools';
import { globalVar } from '../global/globalVar';
import { Link, useHistory } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { FiAlertOctagon } from 'react-icons/fi';
import { FaRegCheckCircle } from 'react-icons/fa';
import { ImSpinner9 } from 'react-icons/im';
import { email } from '../mail/email';
import { auth } from '../auth/authenticate';


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
    const [loader, setLoader] = useState(false);
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
            setLoader(true);
            const emailData = {
                from: suggests.email,
                subject: suggests.subject,
                body: suggests.suggestion
            }
            email.send(emailData,(res:any)=>{
                setLoader(false);
                setShowError({
                    state:true,
                    msg: res.message,
                    link: ""
                });
            });
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
        <Loader state={loader} onClose={()=>{setLoader(false)}}/>
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
                <IonLabel style={{color:data.color}} class="error-box-msg">{data.msg || "No error message"}</IonLabel>
                <Link to="#" onClick={()=>{tools.click.byId("error-link")}}>{data.link}</Link>
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

export const AlertPopup = (props:any) =>{
    let timer:any = null;
    if (props.state){
        timer = setTimeout(()=>{
            if (props.onClose && props.timer !== false) props.onClose();
            clearTimeout(timer);
        },4000);
    }
    return(
        <IonAlert
          isOpen={props.state}
          onDidDismiss={() =>{if (props.onClose) props.onClose()}}
          cssClass='my-custom-class'
          header={props.header || 'Alert'}
          subHeader={props.subHeader || 'Subtitle'}
          message={props.msg || 'This is an alert message.'}
          buttons={[{
            text: 'Okay',
            handler: () => {
                clearTimeout(timer);
            }
          }]}
        />
    )
}

export const Loader = (props:any) =>{
    return(
        <IonLoading
        cssClass='my-custom-class'
        isOpen={props.state}
        onDidDismiss={() =>{if (props.onClose) props.onClose()}}
        message={'Please wait...'}
        duration={props.duraton || null}
      />
    )
}

export const ItemLoader = (props:any) =>{
    return(
        <div hidden={!props.state} className="item-loader-back-drop">
            <div className="item-loader-container">
                <ImSpinner9 color={props.color} className="item-loader-icon"/>
                <div className="item-loader-content" style={{color:props.color}}>Please wait...</div>
            </div>
        </div>
    )
}

export const ConfirmLeave = (props:any) =>{
    const history = useHistory();
    const [loader, setLoader] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [status, setStatus] = useState({alert: "", good: "none", border: "rgb(136, 123, 88)"});
    const alertcolor = "orange";
    const goodColor = "rgb(116, 185, 25)";
    const willSignOut = async() =>{
        setLoader(true);
        const state = await auth.signOut();
        if (state){
            setTimeout(()=>{
                setStatus({alert: "none", good: "", border: goodColor});
                setLoader(false);
                setShowSuccess(true);
                setTimeout(()=>{
                    if (props.onClose) props.onClose();
                    history.push(globalVar.route.AdminLogin);
                },2000);
            },2000);
        }
    }
    return(
        <IonList hidden={!props.state} className="confirm-leave-backdrop">
            <ItemLoader color="blue" state={loader}/>
            <div className="confirm-leave-container" style={{border:`2px solid ${status.border}`}}>
                <AiOutlineClose onClick={()=>{
                    if (props.onClose) props.onClose();
                }} className="confirm-leave-close confirm-leave-close-hover"/>
                <div className="confirm-leave-alert">
                    <FiAlertOctagon style={{color:alertcolor,display:status.alert}}/>
                    <FaRegCheckCircle style={{color:goodColor,display:status.good}}/>
                </div>
                <div hidden={showSuccess} className="confirm-leave-message">Are you sure you want to leave this page?</div>
                <div hidden={showSuccess} className="confirm-leave-sub-message">This will log you out of Administration</div>
                <div hidden={!showSuccess} className="confirm-leave-action-message">Successfully logged out</div>
                <div className="confirm-leave-button-container">
                    <div className="confirm-leave-no-button confirm-button-click" onClick={()=>{
                        if (props.onClose) props.onClose();
                    }}>Cancel</div>
                    <div className="confirm-leave-yes-button confirm-button-click" onClick={()=>{
                        willSignOut();
                    }}>Confirm</div>
                </div>
            </div>
        </IonList>
    )
}
