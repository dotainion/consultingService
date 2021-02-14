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



class Test extends React.Component{   
    
    render(){;
        return(
            <IonPage>
                <IonContent>
                    
                </IonContent>
            </IonPage>
        )
    }
}
export default Test;