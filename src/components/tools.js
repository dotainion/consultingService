import { createImmediatelyInvokedFunctionExpression } from "typescript"

class Info{
    aboutus = {
        header: "ABOUT US",
        list: [
            "About GCMS",
            "FAQ’s",
            "Clients",
            "News / Press Releases",
            "Video",
            "Sustainability",
        ]
    }
    contact = {
        header: "Contact Us",
        list: [
            {name: "example@gmail.com", style: "footer-content-items", hover: "footer-content-items-hover"},
            {name: "1 (473) 999-9999", style: "footer-content-items", hover: "footer-content-items-hover"},
            {name: "or", style: "footer-content-items", hover: ""},
            {name: "1 (473) 999-8888", style: "footer-content-items", hover: "footer-content-items-hover"},
        ]
    }
    services = {
        header: "SERVICES",
        list: [
            
        ]
    }
    location = {
        header: "Head Office Location",
        list: [
            "GMCS is located on H.A. Blaise Street in St. George’s right behind the Fire Station on the Carenage in St. George’s Grenada. Our office is located on the third floor of the Caribbean Coding Building."
        ]
    }
    intro = {
        title: "Grenada Management Consulting Services (GMCS) for Startups and Small Businesses",
        subTitle: "",
        content: "This is a fully managed services outsource model for startups and small businesses. GMCS manages and assumes responsibility for providing a defined set of services to its clients either proactively or as needed. GMCS consultant assist clients with a broad area of services, we assess client’s problems, formulate a plan of action and a solution. GMCS is founded by Grenadians key experts and non-key experts’ professionals residing on the island and in the diaspora.",
    }
    offers = [
        {
            title: "title 1",
            subTitle: "sub title 1",
            note: "note 1"
        },{
            title: "title 2",
            subTitle: "sub title 2",
            note: "note 2"
        },{
            title: "title 3",
            subTitle: "sub title 3",
            note: "note 3"
        }
    ]
    pricing = {
        header: "Our Pricing Model",
        info: "Our management professional analyzes startups or small businesses and create solutions, while helping companies meet their goals. Clients have the option to receive help from GMCS, as they need it without any long-term Contracts. Clients purchase hours as needed for specific tasks and projects.",
        whyThisRates: "Our rates are based on these four models, customers have the options to select most effective option that benefit them.",
        rates: [
            "•	Charging by hourly rate-starting at EC$125.",
            "•	Charging by project.",
            "•	Charging based on ROI.",
            "•	Charging an initial fee plus monthly retainer.",
        ]
    }
    aboutusData = {
        header: "ABOUT US",
        list: [
            
        ]
    }
    clients = {
        header: "CLIENTS",
        names: [
            "New York Finest Bagels Inc. -Grenada.",
            "Upper Ideal Restaurant and Bar.",
            "Call Wave Solutions Inc.-Call Center.",
            "Ameltek Inc.- Technology Company.",
            "Hard Wood Construction Company Ltd.",
            "Western Dairies Grenada Inc.",
            "Bel Car Grenada Inc.",
            "Urban Green Energy Grenada Ltd- Solar Energy.",
            "Island Investment Services Ltd.-Stock Security Investment Company.",

        ]

    }
    benefits = {
        header: "Benefits of Hiring Grenada Management Consulting Services (GMCS)",
        list: [
            "•	Gain access to expertise and knowledge immediately as a business startup or an entrepreneur.",
            "•	No NIS or taxes reporting, benefits, or human resource issues.",
            "•	Contract work is scalable",
            "•	Easy to terminate when no longer needed",
            "•	Independent advice",
            "•	Diversity of ideas from other experiences",
            "•	Flexible for project specific work",
        ]
    }
    models = {
        header: "",
        list: [

        ]
    }
}
class Clicks{
    id(elementId){
        try{
            document.getElementById(elementId).click();
        }catch{console.log(`${elementId} not found`);}
    }
    form(){
        tools.click.id("form-display-hander-id");
    }
}
class Tools{
    click = new Clicks();
    open = new Clicks();
    info = new Info();
    compare(compareThis,withThat,returnIfTrue,returnIfFalse){
        if (compareThis === withThat) return returnIfTrue;
        else return returnIfFalse;
    }
}
const tools = new Tools();
export { tools }