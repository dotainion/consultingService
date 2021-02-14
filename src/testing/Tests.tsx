import { IonHeader, IonImg, IonItem, IonLabel, IonList, IonTitle,IonThumbnail, IonCard, IonModal, IonContent, IonInput, IonButton, IonCardContent, IonTextarea, IonSelect, IonSelectOption, IonIcon, IonPage } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './Tests.css';
import { tools } from '../components/tools';
import { DropDownList, Loader } from '../components/Widgets';
import { chevronDown } from 'ionicons/icons';
import { content } from '../components/Contents';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { images } from '../components/Images';
import { globalVar } from '../global/globalVar';
import { ErrorBox } from '../components/Widgets';
import { addData } from '../auth/database';
import { useHistory } from 'react-router';
import { render } from '@testing-library/react';
import { NumericLiteral } from 'typescript';


let interval: any;
const Test = () =>{   
    const history = useHistory();
    const [count, setCount] = useState(0);
    const [width, setWidth] = useState("0%");
    const [color, setColor] = useState("");
    const counter = () =>{
        if (count < 100){
            setCount(count + 1);
            setWidth(`${count}%`);
            if (count === 99) setColor("green")
        }else{
            setCount(0);
            setWidth("");
            setColor("");
            history.push(globalVar.route.Home);
        }
    }
    return(
        <IonPage>
            <div className="test">
                <div style={{border:"1px solid red",padding:"2px",overflow:"hidden"}}>
                    <div style={{height:"40px",width:width,backgroundColor:"blue"}}></div>
                </div>
                <span>{count}%</span>
                <div>This is a test page</div>
                <h1 style={{backgroundColor:color}} onClick={counter}>go to home</h1>
            </div>
        </IonPage>
    )
}
export default Test;