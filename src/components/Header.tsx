import { IonHeader, IonImg, IonItem, IonLabel, IonList, IonTitle,IonThumbnail, IonCard } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './Header.css';
import img from '../images/image.jpg';
import img1 from '../images/image1.jpg';
import img2 from '../images/image2.jpg';
import img3 from '../images/image3.jpg';
import img4 from '../images/image4.jpg';
import { tools } from './tools';

const DropDownList = (props:any) =>{
    return(
        <div hidden={!props.display} className="header-drop-down-lists-main-container" onMouseLeave={()=>{
            if (props.onClose) props.onClose();
        }}>
            {props.value.map((list:any,key:any)=>(
                <IonLabel class="header-drop-down-list-item header-drop-down-list-item-hover" key={key} onClick={()=>{
                    if (props.onClick) props.onClick(list);
                }}>{list}</IonLabel>
            ))}
        </div>
    )
}
export const Header = (props:any)=>{
    const images = [img,img1,img2,img3,img4];
    const [slider, setSlider] = useState(images[0]);
    const [drop_list, set_drop_list] = useState([] as any[]);
    const [drop_id, set_drop_id] = useState({
        service: false,
        aboutUs: false,
        programModel: false,
        benefits: false,
    });
    const services = tools.info.services.list;
    const abouts = tools.info.aboutus.list;
    const models = tools.info.models.list;
    const benefits:any = [];

    const keys = ["service","aboutus","programmodel","benefits"]

    const dropDownOptions = [
        {name: "Services", value: services, display: drop_id.service, key: keys[0], shouldDrop: true},
        {name: "About Us", value: abouts, display: drop_id.aboutUs, key: keys[1], shouldDrop: true},
        {name: "Our Program Model", value: models, display: drop_id.programModel, key: keys[2], shouldDrop: true},
        {name: "Benefits of Gmes", value: benefits, display: drop_id.benefits, key: keys[3], shouldDrop: false}
    ]
    const setDropDown = (cmd:string) =>{
        set_drop_id({
            service: tools.compare(cmd,keys[0],true,false),
            aboutUs: tools.compare(cmd,keys[1],true,false),
            programModel: tools.compare(cmd,keys[2],true,false),
            benefits: tools.compare(cmd,keys[3],true,false),
        });
    }

    let index = 0;
    const sliderAuto = () =>{
        setTimeout(()=>{
            setSlider(images[index]);
            sliderAuto();
            if (index === images.length-1) index = 0;
            else index ++;
        },2000)
    }

    useEffect(()=>{
        sliderAuto();
    },[]);

    return(
        <IonHeader class="header-main-container">
            <div className="header-sub-container">
                <div className="header-left-container">
                    <IonLabel class="header-title">Grenada Management</IonLabel>
                    <IonLabel class="header-title">Consulting Service</IonLabel>
                    <IonLabel class="header-title">GMCS</IonLabel>
                </div>
                <div className="header-center-container">
                    <IonLabel class="header-title">Grenada</IonLabel>
                    <IonLabel class="header-title">Cariacou</IonLabel>
                    <IonLabel class="header-title">Pitite martinique</IonLabel>
                </div>
                <div className="header-right-container">
                    <IonThumbnail>
                        <IonImg class="header-image" src={slider}/>
                    </IonThumbnail>
                </div>
            </div>
            <IonItem className="header-drop-down-options-container">
                {dropDownOptions.map((option,key)=>(
                    <div className="header-drop-down-buttons" key={key} onMouseEnter={()=>{
                        setDropDown("all");
                    }} onMouseLeave={()=>{
                        setDropDown("all");
                    }}>
                        <span className="header-drop-down-buttons-hover" onMouseEnter={()=>{
                            if (option.shouldDrop && option.value.length !== 0){
                                set_drop_list(option.value);
                                setDropDown(option.key);
                            }
                        }} onClick={()=>{
                            if (!option.shouldDrop && option.value.length === 0){
                                if (props.scrollTo) props.scrollTo({x:0,y:1300});
                            }
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