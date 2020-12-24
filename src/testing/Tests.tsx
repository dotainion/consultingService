import { IonButton, IonContent, IonPage, IonSlide, IonSlides } from '@ionic/react';
import React from 'react';
import { tools } from '../components/tools';

const slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: {
        delay: 142000
    }
};

const Test: React.FC = () =>{
    return(
        <IonPage>
            <IonContent>
                <IonSlides
                    pager={true} 
                    options={slideOpts} 
                    id="slide" 
                    style={{height:"100%"}}                   
                >
                    <IonSlide>
                        <div>one</div>
                    </IonSlide>
                    <IonSlide>
                        <div>two</div>
                    </IonSlide>
                    <IonSlide>
                        <div>three</div>
                    </IonSlide>
                </IonSlides>
                <IonButton onClick={()=>{
                    tools.click.id("slide");
                }}>Click Me</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default Test;