import { IonButton, IonContent, IonHeader, IonIcon, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { auth } from '../auth/authenticate';
import { people } from 'ionicons/icons';
import React from 'react';
import { getData } from '../auth/database';
import { tools } from '../components/tools';
import { globalVar } from '../global/globalVar';
import './admin.css';
import { GoSignOut } from 'react-icons/go';
import { ConfirmLeave } from '../components/Widgets';
import { Link } from 'react-router-dom';


class Administrator extends React.Component{
    customers:any = [];
    userData:any = {};
    hideList = false;
    confirmLeave = false;
    intervalRef:any = null;
    constructor(props:any){
        super(props);

        this.customers = [];
        this.userData = {};

        this.hideList = false;
        this.intervalRef = null;
        this.confirmLeave = false;
    }
    async viewCustomer(customer:any){
        this.hideInfo()
        this.userData = customer;
        this.setState({userData:this.userData});
        
    }
    async getCustomers(){
        this.customers = await getData();
        this.setState({customers:this.customers});
    }
    hideInfo(){
        const key = Object.keys(this.userData);
        if (key.length === 0) return false;
        else return true;
    }
    hideCustomerList(){
        if (tools.isMobile()){
            if (this.hideList) this.hideList = false;
            else this.hideList = true;
            this.setState({hideList:this.hideList});
        }
    }
    listener(){
        this.intervalRef = setInterval(()=>{
            const element = document.getElementById("redirect-admin");
            if (!tools.isMobile()){
                this.hideList = false;
                this.setState({hideList:this.hideList});
            }
        },400);
    }
    async componentWillUnmount(){
        const element = document.getElementById("remain-admin");
        if (auth.isLogin()){
            const confirm = window.confirm("You will be sign out if you leave this page.");
            if (!confirm && element){
                element.click();
            }else{
                clearInterval(this.intervalRef);
                await auth.signOut();
            }
        }     
    }
    async componentDidMount(){
        const element = document.getElementById("redirect-admin");
        if (auth.isLogin()){
            await this.getCustomers();
            this.listener();
        }else{
            this.setState({});
            if (element) element.click();
            window.location.reload();
        }
    }
    render(){
        return(
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Administrator</IonTitle>
                        <GoSignOut className="admin-logout-icon" onClick={()=>{
                            this.confirmLeave = true;
                            this.setState({confirmLeave:this.confirmLeave});
                        }}/>
                        <IonIcon class="admin-header-icon" onClick={()=>{
                            this.hideCustomerList();
                        }} slot="end" icon={people}/>
                    </IonToolbar>
                </IonHeader>
                <ConfirmLeave 
                    state={this.confirmLeave}
                    onClose={()=>{
                        this.confirmLeave = false;
                        this.setState({confirmLeave:this.confirmLeave});
                        const element = document.getElementById("redirect-admin");
                        if (element) element.click();
                    }}
                />
                <IonContent>
                    <div className="admin-spliter-container">
                        <div hidden={this.hideList} onClick={()=>{
                            this.hideCustomerList();
                        }} className="admin-splited-left-container">
                            <div className="admin-sub-header">Customers</div>
                            <IonList className="admin-customer-list">
                                {
                                    this.customers.length ?
                                    this.customers.map((customer:any, key:any)=>(
                                        <IonList key={key} onClick={()=>{
                                            this.viewCustomer(customer);
                                        }} className="admin-customers-container admin-customer-hover">
                                            <div>Date: {customer?.info?.date}</div>
                                            <div>Name: {customer?.info?.name}</div>
                                            <div>Company: {customer?.info?.company}</div>
                                        </IonList>
                                    )):
                                    <div>No Records</div>
                                }
                            </IonList>
                        </div>
                        <div className="admin-splited-right-container">
                            <div className="admin-sub-header">Customers Information</div>
                            <div hidden={!this.hideInfo()} className="admin-customer-info-container">
                                <div className="admin-info-date">{this.userData?.info?.date}</div>
                                <div className="admin-info-name"><span className="admin-info-item-ref">Name:</span> {this.userData?.info?.name}</div>
                                <div className="admin-info-item"><span className="admin-info-item-ref">Phone:</span> {this.userData?.info?.phone}</div>
                                <div className="admin-info-item"><span className="admin-info-item-ref">Address:</span> {this.userData?.info?.address}</div>
                                <div className="admin-info-item"><span className="admin-info-item-ref">Email:</span> {this.userData?.info?.email}</div>
                                <div className="admin-info-item"><span className="admin-info-item-ref">Company:</span> {this.userData?.info?.company}</div>
                                <div className="admin-info-item"><span className="admin-info-item-ref">Service:</span> {this.userData?.info?.service}</div>
                                <div className="admin-info-item"><span className="admin-info-item-ref">Other:</span> {this.userData?.info?.other}</div>
                                <div className="admin-info-item"><span className="admin-info-item-ref">Details:</span> {this.userData?.info?.details}</div>
                            </div>
                            <div hidden={this.hideInfo()} className="admin-customer-info-container">
                                <div className="admin-customer-info-unavailable">
                                    <div className="admin-customer-unavailable">No records to display</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </IonContent>
                <Link to={globalVar.route.AdminLogin} id="redirect-admin"/>
                <Link to={globalVar.route.Admin} id="remain-admin"/>
            </IonPage>
        )
    }
}

export default Administrator;