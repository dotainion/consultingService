import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import { tools } from '../components/tools';
import './Neighborhood.css';


const Neighborhood: React.FC = () =>{
    tools.pageTitle();
    return(
        <IonPage>
            <IonContent>

            </IonContent>
        </IonPage>
    )
}

export default Neighborhood;