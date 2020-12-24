import axios from 'axios';

class Email{
    send(data){
        axios.post("http://localhost:4000/",data)
        .then((response)=>{
            console.log(response);
        })
        .then((error)=>{
            console.log(error);
        });
    }
}

class Clicks{
    id(elementId){
        try{
            document.getElementById(elementId).click();
        }catch{console.log(`${elementId} not found`);}
    }
}

class State{
    tempState = "temp-state";
    set(stateToSet){
        const tempState = tools.state.tempState;
        window.localStorage.setItem(tempState,JSON.stringify(stateToSet));
        return;
    }
    get(){
        //if value not null then value will be store in valueState
        //after that value will be set to null
        //then valueState will be return
        //if functions return then its value will be null or 
        //will have to reset value by calling set function and pass its value.
        const tempState = tools.state.tempState;
        const valueState = window.localStorage.getItem(tempState);
        if (valueState){ 
            tools.state.set(null);
            return JSON.parse(valueState);
        }return null;
    }
}
class Visible{
    isVisible(id,callBack){
        const isInViewPort = (element) =>{
            const rect = element.getBoundingClientRect()
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
        const elementRef = document.getElementById(id);
        const loopRef = setInterval(async()=>{
            callBack(isInViewPort(elementRef));
        },400);
        return loopRef;
    }
    deVisibleCheck(element){
        clearInterval(element);
    }
}
class Tools{
    state = new State();
    click = new Clicks();
    open = new Clicks();
    email = new Email();
    element = new Visible();
    compare(compareThis,withThat,returnIfTrue,returnIfFalse){
        if (compareThis === withThat) return returnIfTrue;
        else return returnIfFalse;
    }
    isMobile(){
        if (window.innerWidth <= 767) return true;
        return false;
    }
    isEmailValid(email){
        const regix = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (regix.test(email)) return true;
        return false;
    }
}
const tools = new Tools();
export { tools }