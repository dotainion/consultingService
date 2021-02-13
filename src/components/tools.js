import { useHistory } from "react-router";
const jwt = require('jsonwebtoken');

class Token{
    tokenKey = "somekey";
    storagekey = "pop-token";
    set(ref="",hour=120){
        const token = jwt.sign({email:ref}, this.tokenKey, { expiresIn: `${hour}h`});
        const getToken = this.get();
        if (getToken){
            let tokenList = [];
            for (let tok of getToken) tokenList.push(tok);
            tokenList.push(token);
            window.localStorage.setItem(this.storagekey,JSON.stringify(tokenList));
        }else window.localStorage.setItem(this.storagekey,JSON.stringify([token]));
    }
    get(){
        const token = window.localStorage.getItem(this.storagekey);
        if (token) return JSON.parse(token);
        return [];
    }
    detete(ref){
        let storeSave = [];
        for (let token of this.get()){
            if (token !== ref) storeSave.push(token);
        }
        window.localStorage.setItem(this.storagekey,JSON.stringify(storeSave));
    }
    isActive(ref=""){
        try{
            const tokens = this.get();
            for (let token of tokens){
                const res = jwt.verify(token, this.tokenKey);
                if (res){
                    if (res.email === ref) return true;
                }else this.detete(token);
            }
            return false;
        }catch{return false;}
    }
    clear(key="all"){
        if (key.toLowerCase() === "all") window.localStorage.clear();
        else window.localStorage.removeItem(key);
    }
}

class Clicks{
    byId(elementId){
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
class Times{
    weekAbbrve = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ];
    monthAbbrve = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    weekFull = [
        "Sunday",
        "Monday",
        "Tueday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    monthFull = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    index(weekdayOrMonth){
        let indexed = 0;
        for (let day of this.weekAbbrve){
            if (weekdayOrMonth === day){
                return indexed;
            }
            indexed ++;
        }
        indexed = 0;
        for (let day of this.weekFull){
            if (weekdayOrMonth === day){
                return indexed;
            }
            indexed ++;
        }
        indexed = 0;
        for (let month of this.monthAbbrve){
            if (weekdayOrMonth === month){
                return indexed;
            }
            indexed ++;
        }
        indexed = 0;
        for (let month of this.monthFull){
            if (weekdayOrMonth === month){
                return indexed;
            }
            indexed ++;
        }
        return null;
    }
    getTodaysDate(abbrv=true){
        let W = ""; 
        let M = "";
        const date = new Date();
        if (abbrv) W = this.weekAbbrve[date.getDay()];
        else W = this.weekFull[date.getDay()];
        if (abbrv) M = this.monthAbbrve[date.getMonth()];
        else M = this.monthFull[date.getDay()];
        const D = date.getDate().toString();
        const Y = date.getFullYear().toString();
        return `${W}/${D}/${M}/${Y}`;
    }
    getDates(types="string", month, year){
        var time = new Date(year, month, 1);
        var days = [];
        while (time.getMonth() === month) {
            const date = new Date(time).getDate();
            const week = this.weekFull[new Date(time).getDay()];
            const month = this.monthFull[new Date(time).getMonth()]
            const year = new Date(time).getFullYear()
            if (types === "string") days.push(`${week}/${month}/${year}/${date}`);
            else if (types === "object") days.push({date:date,week:week,month:month,year:year});
            time.setDate(time.getDate() + 1);
        }
        return days;
    }
    fullMonthStr(month=new Date().getMonth(), year=new Date().getFullYear()){
        return this.getDates("string", month, year);
    }
    fullMonthObj(month=new Date().getMonth(), year=new Date().getFullYear()){
        return this.getDates("object", month, year);
    }
}
class Tools{
    time = new Times()
    state = new State();
    click = new Clicks();
    open = new Clicks();
    element = new Visible();
    token = new Token();
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
    titleCase(strings){
        if (strings){
            let upCase = strings[0].toUpperCase();
            let substrings = strings.substring(1);
            return `${upCase}${substrings}`;
        }else return strings;
    }
    pageTitle(customTitle){
        let title = "";
        if (!customTitle){
            title = useHistory().location.pathname;
        }else title = customTitle;
        for (let _ of title.split("")) 
            title = title.replace("/","-");
        document.title = `GMCS${title}`;
    }
    async toBase64(file){
        return await new Promise((res, rej) => {
            const reader = new FileReader();
            reader.onload = e => res(e.target.result);
            reader.onerror = e => rej(e);
            reader.readAsDataURL(file);
        });
    };
}
const tools = new Tools();
export { tools }