import { IonContent, IonHeader, IonLabel, IonPage, IonImg, IonThumbnail, IonSlide, IonSlides, IonTitle, IonToolbar, IonList, IonItem, IonNote } from '@ionic/react';
import React, { useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { content } from '../components/Contents';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { images } from '../components/Images';
import { Promotion } from '../components/Promotion';
import { tools } from '../components/tools';
import { globalVar } from '../global/globalVar';
import './FAQ.css';

const FAQs: React.FC = () => {
  const history = useHistory();
  const clickHandler = (id:any) =>{
    for (let answerId of content.objects.FAQs){
      let element = document.getElementById(`FAQ${answerId.FAQ}`);
      if (element){
        if (id === `FAQ${answerId.FAQ}`) element.hidden = false;
        else element.hidden = true;
      }
    }
  }
  tools.pageTitle();
  return (
    <IonPage>
        <IonContent>
            <Header id="FAQs"/>
            <IonList class="faq-header-container" lines="none">
              <IonThumbnail class="faq-header-image">
                <IonImg src={images.picture.peopleConsulting}/>
              </IonThumbnail>
              <div className="faq-header-content">
                <div>Frequently Ask Questions</div>
                <div className="faq-header-button faq-button-hover" onClick={()=>{
                  history.push(globalVar.route.Form);
                }}>Contact Us</div>
              </div>
            </IonList>
            <IonList class="faq-container">
              {content.objects.FAQs.map((faq, key)=>(
                <div className="faq-questions-container" key={key}>
                  <div className="faq-questions faq-hover" onClick={()=>{
                    clickHandler(`FAQ${faq.FAQ}`);
                  }}>{faq.FAQ}</div>
                  <div hidden id={`FAQ${faq.FAQ}`} className="faq-answer-container">
                    <div className="faq-questions-answer-header">{faq.answers.header}</div>
                    {faq.answers.list.map((ans_list, list_key)=>(
                      <ul key={list_key}>
                        <li className="faq-questions-answer-list">
                          <div>{ans_list}</div>
                        </li>
                      </ul>
                    ))}
                    <IonThumbnail hidden={!faq.answers.graph} class="faq-questons-graph">
                      <IonImg src={faq.answers.graph}/>
                    </IonThumbnail>
                    <div className="faq-questions-answer-ans">{faq.answers.ans}</div>
                    <div className="faq-questions-button faq-button-hover" onClick={()=>{
                      history.push(globalVar.route.Form);
                    }}>Please contact us</div>
                  </div>
                </div>
              ))}
            </IonList> 
            <Promotion/>   
            <Footer/>
        </IonContent>
    </IonPage>
  );
};

export default FAQs;
