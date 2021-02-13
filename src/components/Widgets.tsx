import React, { useEffect, useState } from 'react';
import { IonItem, IonLabel, IonList, IonCard, IonNote, IonContent, IonPopover, IonInput, IonTextarea, IonModal, IonButton, IonAlert, IonIcon, IonLoading, IonCardContent } from '@ionic/react';
import './Widgets.css';
import { tools } from './tools';
import { globalVar } from '../global/globalVar';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { FiAlertOctagon } from 'react-icons/fi';
import { FaRegCheckCircle } from 'react-icons/fa';
import { ImSpinner9 } from 'react-icons/im';
import { auth } from '../auth/authenticate';
import { addSuggestion, deleteSuggestion, updateSuggestion } from '../auth/database';
import { SiGmail } from 'react-icons/si';
import { FaDesktop, FaMobileAlt } from 'react-icons/fa';
import { content } from './Contents';
import { closeOutline } from 'ionicons/icons';


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

export const SuggestionList = ({state, list, onClose, onRecall}:any) =>{
    const [showLoader, setShowLoader] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState({
       state: false,
       data: null 
    } as any);
    const showReadMore = (content:any) =>{
        const checkLenght = (limit:number) =>{
            if (content.split("").length > limit) return false;
            else return true;
        }
        if (tools.isMobile()) return checkLenght(100);
        else  return checkLenght(200);
    }
    const deleteRecord = async() =>{
        setShowLoader(true);
        const suggestId = confirmDelete?.data?.id;
        await deleteSuggestion(suggestId);
        if (onRecall) onRecall();
        setShowLoader(false);
    }
    const updateRecord = async(id:string,value:string) =>{
        setShowLoader(true);
        await updateSuggestion(id,{status:value});
        if (onRecall) onRecall();
        setShowLoader(false);
    }
    return(
        <IonModal onDidDismiss={()=>{
            if (onClose) onClose();
        }} isOpen={state}>
            <AlertConfirm 
                state={confirmDelete.state}
                message="Are you sure you will like to delete this suggestion?"
                onClose={()=>{
                    setConfirmDelete({
                        state: false,
                        data: null 
                    });
                }}
                onConfirm={()=>{
                    deleteRecord();
                }}
            />
            <Loader
                state={showLoader}
                onClose={()=>{
                    setShowLoader(false);
                }}
            />
            <IonIcon icon={closeOutline} onClick={()=>{
                if (onClose) onClose();
            }} class="suggest-close suggest-close-hover"/>
            <IonItem class="suggest-list-header" lines="full">
                <IonLabel>Suggestions</IonLabel>
            </IonItem>
            <IonContent>
                <IonList class="suggest-list-container">
                    {
                        list.lenght?
                        list.map((suggest:any, key:number)=>(
                            <IonCard key={key}>
                                <IonCardContent class="suggest-list-content">
                                    <div>status: {suggest?.info?.status || "Pending..."}</div>
                                    <div>{suggest?.info?.email}</div>
                                    <div>{suggest?.info?.subject}</div>
                                    <div className="suggest-suggestions" id={`${suggest?.id}suggest`}>{suggest?.info?.suggestion}</div>
                                    <IonItem class="suggest-button-container">
                                        <div slot="end" hidden={showReadMore(suggest?.info?.suggestion)} onClick={(e)=>{
                                            let element = document.getElementById(`${suggest?.id}suggest`);
                                            if (element){ 
                                                element.style.height = "auto";
                                                e.currentTarget.hidden = true;
                                            }
                                        }} className="suggest-more suggest-more-hover">Read more...</div>
                                        <select slot="end" onChange={(e)=>{
                                            updateRecord(suggest?.id,e.target.value);
                                        }} className="suggest-options-update">
                                            <option hidden defaultChecked>Choose Status</option>
                                            <option>In Progress</option>
                                            <option>On Hold</option>
                                            <option>Completed</option>
                                            <option>Can't Be Done</option>
                                        </select>
                                        <IonButton slot="end" onClick={()=>{
                                            setConfirmDelete({
                                                state: true,
                                                data: suggest 
                                            });
                                        }} color="light">Delete</IonButton>
                                    </IonItem>
                                </IonCardContent>
                            </IonCard>
                        )):
                        <IonItem>
                            <IonLabel>No records available</IonLabel>
                        </IonItem>
                    }
                </IonList>
            </IonContent>
        </IonModal>
    )
}

export const SuggestionBox = () =>{
    const [loader, setLoader] = useState(false);
    const [openSuggestion, setOpenSuggestion] = useState(false);
    const [showError, setShowError] = useState({state:false,msg:"",link: "",color: ""});
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
                link: "gmail.com",
                color: "orangered"
            });
        }else if (!suggests.suggestion){
            setShowError({
                state:true,
                msg: "Plese provide your suggestion first and then click send",
                link: "",
                color: "orangered"
            });
        }else{
            setLoader(true);
            const emailData = {
                email: tools.titleCase(suggests.email),
                subject: tools.titleCase(suggests.subject),
                suggestion: tools.titleCase(suggests.suggestion)
            }
            const res = addSuggestion(emailData);
            if (res){
                setShowError({
                    state:true,
                    msg: "Suggestion sent",
                    link: "",
                    color: "green"
                });
                setMySuggestion({
                    email: "",
                    subject: "", 
                    suggestion: ""
                });
            }else{
                setShowError({
                    state:true,
                    msg: "Something when wrong. Please try again later",
                    link: "",
                    color: "orangered"
                });
            }
            setLoader(false);
        }
    }
    return(
        <>
        <ErrorBox 
            isOpen={showError.state} 
            onClose={()=>{
                setShowError({state:false,msg:"",link: "",color: ""});
                setOpenSuggestion(false);
            }} 
            msg={showError.msg}
            link={showError.link}
            color={showError.color}
        />
        <Loader state={loader} onClose={()=>{setLoader(false)}}/>
        <IonModal isOpen={openSuggestion} onDidDismiss={()=>setOpenSuggestion(false)}>
            <IonList class="suggest-close-button-container">
                <IonLabel class="suggest-close-button suggest-hover" onClick={()=>{
                    setOpenSuggestion(false);
                }}>X</IonLabel>
            </IonList>
            <IonList class="suggest-container">
                <IonItem class="suggest-header-container" lines="none">
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

export const AlertConfirm = (props:any) =>{
    return(
        <IonAlert
            isOpen={props.state}
            onDidDismiss={() =>{
                if (props.onClose) props.onClose();
            }}
            cssClass='alert-confirm-main'
            header={props.header || "Confirm!"}
            message={props.message || "Message!!!"}
            buttons={[{
                text: 'Cancel',
                role: 'cancel',
                cssClass: 'alert-confirm-sub',
                handler: () => {
                    if (props.onClose) props.onClose();
                }},{
                text: 'Okay',
                handler: () => {
                    if (props.onConfirm) props.onConfirm();
                }
            }]}
        />
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
                    if (props.onConfirm) props.onConfirm();
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

export const IconHoverInfo = (props:any) =>{
    let hoverStyles = {
        width: props.width,
        top: props.top,
        left: props.left,
        right: props.right,
        bottom: props.bottom,
        transform: props.transform
    }
    return(
        <div slot={props.slot} id={props.id} hidden className="icon-hover-main-container" style={hoverStyles}>
            <div className="icon-hover-content">
                <div>{props.message || "place message"}</div>
            </div>
        </div>
    )
}

/*
import { CgWebsite } from 'react-icons/cg';
import { FaDesktop, FaMobileAlt } from 'react-icons/fa';
 */
export const MailingOptions = (props:any) =>{
    const [MailPlatform, setMailPlatform] = useState({icon:FaDesktop,name:""});
    useEffect(()=>{
        setInterval(()=>{
            if (tools.isMobile()) setMailPlatform({icon:FaMobileAlt,name:"Use mobile app"});
            else setMailPlatform({icon:FaDesktop,name:"Use desktop app"});
        },400);
    },[]);
    return(
        <IonModal isOpen={props.state}>
            <IonList class="mail-option-header-container">
                <IonList class="mail-option-header">
                    <IonLabel>Mailling Options</IonLabel>
                </IonList>
                <IonNote class="mail-option-sub-header">Please choose a option to send you mail from bellow</IonNote>
                <AiOutlineClose onClick={()=>{
                    if (props.onClose) props.onClose();
                }} className="mail-option-close mail-option-close-hover"/>
            </IonList>
            <IonContent>
                <IonList class="mail-option-link-main-container">
                    <IonList class="mail-option-link-container">
                        <IonList onClick={()=>{
                            window.open(globalVar.siteUrl.gmail);
                        }} class="mail-option-link-sub-container mail-option-hover">
                            <SiGmail/>
                            <div className="mail-option-icon-text">Go to gmail.com</div>
                        </IonList>
                        <IonList onClick={()=>{
                            window.open(`mailTo:${content.objects.contact.list[0].name}`,"_self");
                        }} class="mail-option-link-sub-container mail-option-hover">
                            <MailPlatform.icon/>
                            <div className="mail-option-icon-text">{MailPlatform.name}</div>
                        </IonList>
                    </IonList>
                </IonList>
            </IonContent>
        </IonModal>
    )
}

export const Calendar = (props:any) =>{
    const monthHandler = () =>{
        let days:any = [];
        days = tools.time.fullMonthObj();
        const index:any = tools.time.index(days[0].week);
        if (index !== null){
            for (let i=0; i<= index-1; i++) days.unshift("");
        }
        return days;
    }
    const blocks = (dateValue:any) =>{            
        if (dateValue) return "calendar-week-hover";
        else return "calender-no-value";
    }
    const isToday = (value:any) =>{
        try{
            if (new Date().getDate().toString() === value.toString()){
                return "calendar-todays-date";
            }else{
                return "";
            }
        }catch{
            return "";
        }
        
    }
    return(
        <IonModal 
            onDidDismiss={()=>{
                if (props.onClose) props.onClose();
            }}
            isOpen={props.state}>
                {/*onSelect*/}
            <IonContent>    
                <IonList className="calendar-header-container">
                    <IonIcon className="calendar-close calendar-close-hover" onClick={()=>{
                        if (props.onClose) props.onClose();
                    }} icon={closeOutline}/>
                    <IonLabel className="calendar-header">Calendar</IonLabel><br/>
                    <IonNote className="calendar-sub-header">{tools.time.getTodaysDate()}</IonNote>
                </IonList>
                <IonList>
                    {tools.time.weekAbbrve.map((week:any,key:any)=>(
                        <div className="calendar-week-header-container" key={key}>
                            <div className="calendar-week-header">{week}</div>
                        </div>
                    ))}
                </IonList>
                <IonList style={{position:"relative"}}>
                    {monthHandler().map((month:any,key:any)=>(
                        <div key={key} onClick={()=>{
                            if (props.onSelect) props.onSelect(month);
                            if (props.onClose) props.onClose();
                        }} className={"calendar-week-container"}>
                            <div className={`calendar-week-date ${blocks(month.date)} ${isToday(month.date)}`}>
                                <div className="calendar-data-centered">{month.date}</div>
                            </div>
                        </div>
                    ))}
                </IonList>
            </IonContent>
        </IonModal>
    )
}
