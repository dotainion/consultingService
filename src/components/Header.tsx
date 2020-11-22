import { IonHeader, IonImg, IonItem, IonLabel, IonList, IonTitle,IonThumbnail, IonCard, IonButton, IonIcon } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './Header.css';
import { DropDownList } from './Widgets';
import { tools } from './tools';
import { useHistory } from 'react-router';
import { checkmarkCircleOutline, chevronDown } from 'ionicons/icons';
import { Icon } from 'ionicons/dist/types/components/icon/icon';
import { isFunctionOrConstructorTypeNode } from 'typescript';

export const Header = ()=>{
    const history = useHistory();
    const images = tools.images.grenada();
    const [view, setView] = useState(true);
    const [slider, setSlider] = useState(images[0]);
    const [drop_list, set_drop_list] = useState([] as any[]);
    const [drop_id, set_drop_id] = useState({
        service: false,
        aboutUs: false,
        programModel: false,
        benefits: false,
        contact: false,
        home: false,
    });
    const abouts = tools.info.aboutus.list;
    const models = tools.info.models.list;

    const keys = ["home","service","aboutus","programmodel","benefits","contact"];

    const dropDownOptions = [
        {name: "Home", value: [], display: drop_id.home, key: keys[0],icon:""},
        {name: "Services", value: [], display: drop_id.service, key: keys[1],icon:""},
        {name: "About Us", value: abouts, display: drop_id.aboutUs, key: keys[2],icon:chevronDown},
        {name: "Our Program Model", value: models, display: drop_id.programModel, key: keys[3],icon:""},
        {name: "Benefits of GMCS", value: [], display: drop_id.benefits, key: keys[4],icon:""},
        {name: "Contact Us", value: [], display: drop_id.contact, key: keys[5],icon:""},
    ]
    const setDropDown = (cmd:string) =>{
        set_drop_id({
            home: tools.compare(cmd,keys[0],true,false),
            service: tools.compare(cmd,keys[1],true,false),
            aboutUs: tools.compare(cmd,keys[2],true,false),
            programModel: tools.compare(cmd,keys[3],true,false),
            benefits: tools.compare(cmd,keys[4],true,false),
            contact: tools.compare(cmd,keys[5],true,false),
        });
    }

    let index = 0;
    const sliderAuto = () =>{
        setTimeout(()=>{
            setSlider(images[index]);
            sliderAuto();
            if (index === images.length-1) index = 0;
            else index ++;
        },5000)
    }

    const commands = (cmd:any) =>{
        if (cmd == keys[0]){
            //for home
            history.push("/home");
        }else if (cmd == keys[1]){
            //for service
            history.push("/offers");
        }
        else if (cmd == keys[2]){
            //for aboutus
        }
        else if (cmd == keys[3]){
            //for programmodel
        }
        else if (cmd == keys[4]){
            //for benefits
        }
        else if (cmd == keys[5]){
            //for contact
            tools.open.form();
        }
    }

    const isIcon = (icon:any) =>{
        if (icon !== "") return <IonIcon class="header-down-icon" icon={icon}/>
        return "";
    }
    useEffect(()=>{
        sliderAuto();
    },[]);

    return(
        <IonHeader class="header-main-container">
            <div hidden={!view} className="header-sub-container">
                <div className="header-left-container">
                    <IonLabel class="header-title">Grenada Management</IonLabel>
                    <IonLabel class="header-title">Consulting Service</IonLabel>
                    <IonLabel class="header-title">GMCS</IonLabel>
                </div>
                <div className="header-center-container">
                    <IonLabel class="header-title">Grenada</IonLabel>
                    <IonLabel class="header-title">Carriacou</IonLabel>
                    <IonLabel class="header-title">Pitite Martinique</IonLabel>
                </div>
                <div className="header-right-container">
                    <IonThumbnail>
                        <IonImg class="header-image" src={slider}/>
                    </IonThumbnail>
                    <div className="header-text-over-image-container">
                        <div className="header-text-over-image-sub-container">
                            <div className="header-text-over-image-item">Grenada</div>
                        </div>
                    </div>
                </div>
            </div>
            <IonItem className="header-drop-down-options-container">
                {dropDownOptions.map((option,key)=>(
                    <div className="header-drop-down-buttons" key={key} onMouseEnter={()=>{
                        setDropDown("all");
                    }} onMouseLeave={()=>{
                        setDropDown("all");
                    }}>
                        <span className="header-drop-down-text header-drop-down-buttons-hover" onMouseEnter={()=>{
                            if (option.value.length !== 0){
                                set_drop_list(option.value);
                                setDropDown(option.key);
                            }
                        }} onClick={()=>{
                            if (option.value.length === 0){
                                commands(option.key);
                            }
                        }}>{option.name}{isIcon(option.icon)}</span>
                        <DropDownList value={drop_list} onClose={()=>{
                            setDropDown("all");
                        }} onClick={(value:string)=>{
                            console.log(value);
                        }} display={option.display}/>
                    </div>
                ))}
            </IonItem>
            <IonButton hidden id="header-top-view-show" onClick={()=>{
                setView(true);
            }}/>
            <IonButton hidden id="header-top-view-hide" onClick={()=>{
                setView(false);
            }}/>
        </IonHeader>
    )
}

let scrollValue = 0;
export const headerViewScroll = (pos:any) =>{
    //this will hide or show the top header bor 
    //base on the param value passed in
    if (pos >= scrollValue) tools.open.headerViewHide();
    else tools.open.headerViewShow();
    scrollValue = pos;
}