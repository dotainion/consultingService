import { IonButton, IonContent, IonImg, IonItem, IonLabel, IonList, IonPage, IonThumbnail } from '@ionic/react';
import React from 'react';
import { useHistory } from 'react-router';
import { addData, getData } from '../auth/database';
import { images } from '../components/Images';
import { globalVar } from '../global/globalVar';
import './_404.css';

const _404: React.FC = () =>{
    const history = useHistory();
    return(
        <IonPage>
            <IonList class="_404-container">
                <IonList class="_404-sub-container">
                    <IonThumbnail class="_404-image-thumbnail">
                        <IonImg src={images.picture._404}/>
                    </IonThumbnail>
                    <IonList class="_404-text-container">
                        <IonLabel class="_404-text-header">Oops!</IonLabel>
                        <IonLabel class="_404-text">Error 404</IonLabel>
                        <IonLabel class="_404-text">Page not found</IonLabel>
                    </IonList>
                    <IonItem class="_404-button _404-hover" lines="none">
                        <IonLabel onClick={()=>{
                            history.push(globalVar.route.Home);
                        }}>{"<< Go to Home >>"}</IonLabel>
                    </IonItem>
                </IonList>
            </IonList>
        </IonPage>
    )
}
export default _404;