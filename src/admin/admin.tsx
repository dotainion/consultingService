import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { auth } from '../auth/authenticate';
import { calendarOutline, mail, mailOutline, people, trashOutline } from 'ionicons/icons';
import React from 'react';
import { deleteData, getData } from '../auth/database';
import { tools } from '../components/tools';
import { globalVar } from '../global/globalVar';
import './admin.css';
import { GoSignOut } from 'react-icons/go';
import { ConfirmLeave, IconHoverInfo, MailingOptions, ErrorBox, AlertConfirm, Calendar } from '../components/Widgets';
import { Link, useHistory } from 'react-router-dom';
import { EmailPopup } from './../mail/EmailPopup';
import { FiMail } from 'react-icons/fi';


class Administrator extends React.Component{
    customers:any = [];
    userData:any = {};
    hideList = false;
    confirmLeave = false;
    intervalRef:any = null;
    actions:any = [];
    mailOption = false;
    showError:any = {};
    confirmAlert:any = {};
    calendar:any = {};
    constructor(props:any){
        super(props);

        this.customers = [];
        this.userData = {};

        this.hideList = false;
        this.intervalRef = null;
        this.confirmLeave = false;

        this.mailOption = false;
        this.calendar = {
            state: false,
            data: null
        }

        this.actions = [
            {
                icon: mailOutline,
                name: "Send mail",
                command: ()=>{
                    this.mailOption = true;
                    this.setState({mailOption:this.mailOption});
                }
            },{
                icon: trashOutline,
                name: "Delete",
                command: async()=>{
                    if (this.userData?.id){
                        this.confirmAlert = {
                            state: true,
                            message: "Are you sure you will like to delete this record"
                        };
                        this.setState({confirmAlert:this.confirmAlert});
                    }else{
                        this.showError = {
                            state: true,
                            msg: "A record was not selected",
                            link: "",
                            color: "orangered"
                        };
                        this.setState({showError:this.showError});
                    }
                }
            },{
                icon: calendarOutline,
                name: "Schedule",
                command: async()=>{
                    this.calendar = {
                        state: true
                    }
                    this.setState({calendar:this.calendar});
                }
            },
        ];
        this.showError = {
            state: false,
            msg: "",
            link: "",
            color: ""
        };

        this.confirmAlert = {
            state: false,
            message: ""
        };
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
        await this.getCustomers();
        this.listener();
    }
    render(){
        return(
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Administrator</IonTitle>
                        <div slot="end" className="admin-logout-icon-container">
                            <GoSignOut onClick={()=>{
                                this.confirmLeave = true;
                                this.setState({confirmLeave:this.confirmLeave});
                            }} onMouseEnter={()=>{
                                let element = document.getElementById("logout-hover");
                                if (element) element.hidden = false;
                            }} onMouseLeave={()=>{
                                let element = document.getElementById("logout-hover");
                                if (element) element.hidden = true;
                            }} className="admin-logout-icon"/>
                            <IconHoverInfo
                                id="logout-hover"
                                slot="end"
                                top="50%"
                                width="70px"
                                message="SignOut"
                                transform="translate3d(-105%,-50%,0)"
                            />
                        </div>
                        <IonIcon class="admin-header-icon" onClick={()=>{
                            this.hideCustomerList();
                        }} slot="end" icon={people}/>
                    </IonToolbar>
                </IonHeader>
                <Calendar 
                    state={this.calendar.state}
                    onClose={()=>{
                        this.calendar = {
                            state: false,
                            data: null
                        }
                        this.setState({calendar:this.calendar});
                    }}
                    onSelect={(dateValue:any)=>{
                        this.calendar = {
                            state: false,
                            data: dateValue
                        }
                    }}
                />
                <AlertConfirm
                    state={this.confirmAlert.state}
                    header="Confirm!!!"
                    message={this.confirmAlert.message}
                    onClose={()=>{
                        this.confirmAlert = {state: false,message: ""}
                        this.setState({confirmAlert:this.confirmAlert});
                    }}
                    onConfirm={async()=>{
                        const id = this.userData?.id;
                        const deleted = await deleteData(id);
                        this.confirmAlert = {state: false,message: ""}
                        if (deleted){
                            this.showError = {
                                state: true, msg: "Deleted successfully",
                                link: "", color: "green"
                            };
                            this.setState({
                                showError:this.showError,
                                confirmAlert:this.confirmAlert
                            });
                        }else{
                            this.showError = {
                                state: true, msg: "Record was not deleted",
                                link: "", color: "orangered"
                            };
                            this.setState({
                                showError:this.showError,
                                confirmAlert:this.confirmAlert
                            });
                        }
                    }}
                />
                <MailingOptions 
                    state={this.mailOption}
                    onClose={()=>{
                        this.mailOption = false;
                        this.setState({mailOption:this.mailOption});
                    }}
                />
                <ErrorBox
                    isOpen={this.showError.state} 
                    onClose={()=>{
                        this.showError = {
                            state: false,
                            msg: "",
                            link: "",
                            color: ""
                        };
                        this.setState({showError:this.showError});
                    }} 
                    msg={this.showError.msg}
                    link={this.showError.link}
                    color={this.showError.color}
                />
                <ConfirmLeave 
                    state={this.confirmLeave}
                    onConfirm={()=>{
                        this.confirmLeave = false;
                        this.setState({confirmLeave:this.confirmLeave});
                        const element = document.getElementById("redirect-admin");
                        if (element) element.click();
                    }}
                    onClose={()=>{
                        this.confirmLeave = false;
                        this.setState({confirmLeave:this.confirmLeave});
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
                            <div className="admin-customer-actions-main-container">
                                {this.actions.map((action:any, key:any)=>(
                                    <div key={key} onClick={()=>{
                                        action.command();
                                    }} className="admin-customer-actions-container admin-customer-actions-hover">
                                        <IonIcon icon={action.icon}/>
                                        <div className="admin-customer-actions-name">{action.name}</div>
                                    </div>
                                ))}
                            </div>
                            <div hidden={!this.hideInfo()} className="admin-customer-info-container">
                                <div className="admin-info-date">{this.userData?.info?.date}</div>
                                <div className="admin-info-name"><span className="admin-info-item-ref">Name:</span> {this.userData?.info?.name}</div>
                                <div className="admin-info-item"><span className="admin-info-item-ref">Phone:</span> {this.userData?.info?.phone}</div>
                                <div className="admin-info-item"><span className="admin-info-item-ref">Address:</span> {this.userData?.info?.address}</div>
                                <div className="admin-info-item"><span className="admin-info-item-ref">Email:</span> {this.userData?.info?.email}</div>
                                <div className="admin-info-item"><span className="admin-info-item-ref">Company:</span> {this.userData?.info?.company}</div>
                                <div className="admin-info-item"><span className="admin-info-item-ref">Service:</span> {this.userData?.info?.service}</div>
                                <div className="admin-info-other-detail-container">
                                    <div className="admin-info-item-ref">Other:</div>
                                    <div className="admin-info-item">{this.userData?.info?.other}</div>
                                </div>
                                <div className="admin-info-other-detail-container">
                                    <div className="admin-info-item-ref">Details:</div>
                                    <div className="admin-info-item"> {this.userData?.info?.details}</div>
                                </div>
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