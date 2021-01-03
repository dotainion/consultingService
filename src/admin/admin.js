import { IonContent, IonHeader, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { getData } from '../auth/database';
import './admin.css';


class Administrator extends React.Component{
    constructor(){
        super();

        this.customers = [];
    }
    async getCustomers(){
        this.customers = await getData();
        this.setState({customers:this.customers});
    }
    async componentDidMount(){
        await this.getCustomers();
    }
    render(){
        return(
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Administrator</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <div className="admin-spliter-container">
                        <div className="admin-splited-left-container">
                            <div>Customers</div>
                            <IonList className="admin-customer-list">
                                {
                                    this.customers.length ?
                                    this.customers.map((customer, key)=>(
                                        <IonList key={key} className="admin-customers-container admin-customer-hover">
                                            <div>Name: {customer?.info?.name}</div>
                                            <div>Company: {customer?.info?.company}</div>
                                        </IonList>
                                    )):
                                    <div>No Records</div>
                                }
                            </IonList>
                        </div>
                        <div className="admin-splited-right-container">
                            <div>Customers Information</div>
                            <div className="admin-customer-info-container">
                                <div>name</div>
                                <div>phone</div>
                                <div>address</div>
                                <div>email</div>
                                <div>company</div>
                                <div>service</div>
                                <div>details</div>
                            </div>
                        </div>
                    </div>
                </IonContent>
            </IonPage>
        )
    }
}

export default Administrator;