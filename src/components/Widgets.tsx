import React from 'react';
import { IonHeader, IonImg, IonItem, IonLabel, IonList, IonCard, IonTitle, IonNote, IonThumbnail, IonContent } from '@ionic/react';
import './Widgets.css';
import { tools } from './tools';


export const DropDownList = (props:any) =>{
    return(
        <div hidden={!props.display} className="header-drop-down-lists-main-container" onMouseLeave={()=>{
            if (props.onClose) props.onClose();
        }}>
            {props.value.map((list:any,key:any)=>(
                <IonLabel class="header-drop-down-list-item header-drop-down-list-item-hover" key={key} onClick={()=>{
                    if (props.onClick) props.onClick(list);
                    if (props.onClose) props.onClose();
                }}>{list.title || list}</IonLabel>
            ))}
        </div>
    )
}