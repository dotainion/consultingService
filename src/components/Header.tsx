import { IonHeader, IonImg, IonItem, IonLabel, IonList, IonTitle,IonThumbnail, IonCard } from '@ionic/react';
import React, { useState } from 'react';
import './Header.css';
import image from '../images/image.jpg';
import { tools } from './tools';

const DropDownList = (props:any) =>{
    return(
        <IonCard hidden={!props.display} class="header-drop-down-lists-main-container" onMouseLeave={()=>{
            if (props.onClose) props.onClose();
        }}>
            {props.value.map((list:any,key:any)=>(
                <IonLabel class="header-drop-down-list-item header-drop-down-list-item-hover" key={key} onClick={()=>{
                    if (props.onClick) props.onClick(list);
                }}>{list}</IonLabel>
            ))}
        </IonCard>
    )
}
export const Header: React.FC = ()=>{
    const [drop_list, set_drop_list] = useState([] as any[]);
    const [drop_id, set_drop_id] = useState({
        service: false,
        aboutUs: false,
        programModel: false,
        benefits: false,
    });
    const keys = ["service","aboutus","programmodel","benefits"]
    const setDropDown = (cmd:string) =>{
        set_drop_id({
            service: tools.compare(cmd,keys[0],true,false),
            aboutUs: tools.compare(cmd,keys[1],true,false),
            programModel: tools.compare(cmd,keys[2],true,false),
            benefits: tools.compare(cmd,keys[3],true,false),
        });
    }
    const services = ["Testing Drop down","Test Options"];
    const abouts = ["Testing Drop down","Test Options"];
    const models = ["Testing Drop down","Test Options"];
    const benefits = ["Testing Drop down","Test Options"];
    const dropDownOptions = [
        {name: "Services", value: services, display: drop_id.service, key: keys[0]},
        {name: "About Us", value: abouts, display: drop_id.aboutUs, key: keys[1]},
        {name: "Our Program Model", value: models, display: drop_id.programModel, key: keys[2]},
        {name: "Benefits of Gmes", value: benefits, display: drop_id.benefits, key: keys[3]}
    ]
    return(
        <IonHeader class="header-main-container">
            <div className="header-sub-container">
                <div className="header-left-container">
                    <IonLabel class="header-title">Grenada Management</IonLabel>
                    <IonLabel class="header-title">Consulting Service</IonLabel>
                    <IonLabel class="header-title">gmes</IonLabel>
                </div>
                <div className="header-center-container">
                    <IonLabel class="header-title">Grenada</IonLabel>
                    <IonLabel class="header-title">Cariacou</IonLabel>
                    <IonLabel class="header-title">Pitite martinique</IonLabel>
                </div>
                <div className="header-right-container">
                    <IonThumbnail>
                        <IonImg class="header-image" src={image}/>
                    </IonThumbnail>
                </div>
            </div>
            <IonItem className="header-drop-down-options-container">
                {dropDownOptions.map((option,key)=>(
                    <div className="header-drop-down-buttons" key={key}>
                        <span className="header-drop-down-buttons-hover" onClick={()=>{
                            set_drop_list(option.value);
                            setDropDown(option.key);
                        }}>{option.name}</span>
                        <DropDownList value={drop_list} onClose={()=>{
                            setDropDown("all");
                        }} onClick={(value:string)=>{
                            console.log(value);
                        }} display={option.display}/>
                    </div>
                ))}
            </IonItem>
        </IonHeader>
    )
}