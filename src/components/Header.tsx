import { IonHeader, IonImg, IonItem, IonLabel, IonList, IonTitle,IonThumbnail, IonCard, IonButton, IonIcon, IonPopover } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './Header.css';
import { DropDownList } from './Widgets';
import { tools } from './tools';
import { useHistory } from 'react-router';
import { chevronDown } from 'ionicons/icons';
import { images as Images } from './Images';
import { content } from './Contents';

export const Header = (headerProps:any)=>{
    const history = useHistory();
    const images = Images.picture.grenada();
    const [slider, setSlider] = useState(images[0]);
    const [mobileDropDown, setMobileDropDown] = useState({state:false,list:[]as any[]});
    const [menuList, setMenuList] = useState({
        btnBg: "var(--header-text-color)",
        state: false
    });

    const MenuList = (props:any) =>{
        let hiddenByProps = false;
        if (headerProps.home === false) hiddenByProps = true;
        const checkHidden = (value:any) =>{
            if (headerProps.hidden){
                for (var item of headerProps.hidden){
                    if (value === item) return true;
                }
            }
            return false
        }
        return(
            <>
            {content.objects.headerLists.map((info, index)=>(
                <div hidden={checkHidden(info.name)} className="header-dropdown-item-container" onMouseLeave={()=>{
                    const element = document.getElementById(`${info.name}${props.id}`);
                    if (element) element.hidden = true;
                }} key={index}>
                    <span className="header-menu-item header-hover" onMouseEnter={()=>{
                        if (info.list.length > 0 && !tools.isMobile()){
                            const element = document.getElementById(`${info.name}${props.id}`);
                            if (element) element.hidden = false;
                        }
                    }} onClick={()=>{
                        if (info.list.length <= 0){
                            history.push(info.route);
                        }else if (tools.isMobile()){
                            setMobileDropDown({state:true,list:info.list});
                        }
                    }}>{info.name}</span>
                    <DropDownList hidden value={info.list} onClose={()=>{
                        const element = document.getElementById(`${info.name}${props.id}`);
                        if (element) element.hidden = true;
                    }} onClick={(route:string)=>{
                        history.push(route);
                    }} id={`${info.name}${props.id}`}/>
                </div>
            ))}
            </>
        )
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

    useEffect(()=>{
        sliderAuto();
    },[]);
    return(
        <IonHeader class="header-main-container">
            <IonPopover isOpen={mobileDropDown.state} onDidDismiss={()=>{
                setMobileDropDown({state:false,list:[]});
            }}>
                {mobileDropDown.list.map((info,index)=>(
                    <IonItem key={index}>
                        <IonLabel onClick={()=>{
                            setMobileDropDown({state:false,list:[]});
                            setMenuList({btnBg: "var(--header-text-color)",state: false});
                            history.push(info.route);
                        }}>{info.name}</IonLabel>
                    </IonItem>
                ))}
            </IonPopover>
            <div className="header-sub-container">
                <IonList className="header-item-container">
                    <IonLabel class="header-item">Grenada Management</IonLabel>
                    <IonLabel class="header-item">Consulting Service</IonLabel>
                    <IonLabel class="header-item">GMCS</IonLabel>
                </IonList>
                <IonList className="header-item-container">
                    <IonLabel class="header-item">Grenada</IonLabel>
                    <IonLabel class="header-item">Carriacou</IonLabel>
                    <IonLabel class="header-item">Pitite Martinique</IonLabel>
                </IonList>
                <IonList class="header-image-container">
                    <IonThumbnail class="header-image">
                        <IonImg src={slider}/>
                    </IonThumbnail>
                    <IonLabel class="header-image-content">Grenada</IonLabel>
                </IonList>
                <div className="header-menu-container">
                    <Images.icons.menu color={menuList.btnBg} onClick={()=>{
                        if (menuList.state) setMenuList({btnBg: "var(--header-text-color)",state: false});
                        else setMenuList({btnBg: "white",state: true});
                    }} className="header-menu-button"/>
                    <div hidden={!menuList.state}>
                        <MenuList id="mobile"/>
                    </div>
                </div>
            </div>
            <div className="header-drop-down-container">
                <MenuList id="desktop"/>
            </div>
        </IonHeader>
    )
}