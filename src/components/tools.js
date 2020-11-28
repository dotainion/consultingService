

class Clicks{
    id(elementId){
        try{
            document.getElementById(elementId).click();
        }catch{console.log(`${elementId} not found`);}
    }
    headerViewShow(){
        tools.click.id("header-top-view-show");
    }
    headerViewHide(){
        tools.click.id("header-top-view-hide");
    }
}
class Tools{
    click = new Clicks();
    open = new Clicks();
    compare(compareThis,withThat,returnIfTrue,returnIfFalse){
        if (compareThis === withThat) return returnIfTrue;
        else return returnIfFalse;
    }
    isMobile(){
        if (window.innerWidth <= 767) return true;
        return false;
    }
}
const tools = new Tools();
export { tools }