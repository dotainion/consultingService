import React from 'react';
import './Welcome.css';
import { images } from '../Images';


export const Welcome = () =>{
    const welcomeServices = [
        {
            title: "Business Consulting",
            content: "Professional guidance and planning for your business",
            image: images.picture.consulter
        },{
            title: "Accounting & Tax",
            content: "Keep track of your performance and stay compliant",
            image: images.picture.acountsandtax
        },{
            title: "Marketing",
            content: "Promote your business effectively with quality communications",
            image: images.picture.marketing
        },{
            title: "Training",
            content: "Get the knowledge and skills you need to succeed in business",
            image: images.picture.learning
        },
    ]
    return(
        <div className="welcome-main-container">
            <div className="welcome-header">WELCOME TO YOUR ONE STOP BUSINESS SUPPORT SERVICE</div>
            <p className="welcome-objective">
                Customized consultancy support services to achieve 
                your complex modern business objectives.  
                Every business needs the support of a good partner.
                Get quality consultancy services and expertise from the Caribbean's 
                leading Business Consultants
            </p>
            <div className="welcome-sub-container">
                {welcomeServices.map((service,key)=>(
                    <div className="welcome-item-container" key={key}>
                        <img className="welcome-image" src={service.image}/>
                        <div className="welcome-content-container">
                            <div className="welcome-title">{service.title}</div>
                            <div className="welcome-contents">{service.content}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}