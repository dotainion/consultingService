import { createImmediatelyInvokedFunctionExpression } from "typescript"
import brokerage from '../images/brokerage.jpg';
import brokerage2 from '../images/brokerage2.jpg';
import consulting from '../images/consulting.jpg';
import consulting2 from '../images/consulting2.png';
import grenada1 from '../images/grenada1.jpg';
import grenada2 from '../images/grenada2.jpg';
import grenada3 from '../images/grenada3.jpg';
import grenada4 from '../images/grenada4.jpg';
import grenada5 from '../images/grenada5.jpg';
import roundTable from '../images/roundTable.jpg';
import vendering from '../images/vendering.jpg';
import vendering2 from '../images/vendering2.jpg';
import pricing from '../images/pricing.jpg';
import consulter from '../images/consulter.webp';
import pricing3 from '../images/pricing3.webp';

class SysImages{
    brokerage = brokerage;
    brokerage2 = brokerage2;
    consulting = consulting;
    consulting2 = consulting2;
    grenada1 = grenada1;
    grenada2 = grenada2;
    grenada3 = grenada3;
    grenada4 = grenada4;
    grenada5 = grenada5;
    roundTable = roundTable;
    vendering = vendering;
    vendering2 = vendering2;
    pricing = pricing;
    consulter = consulter;
    pricing3 = pricing3;
    grenada(){
        return [grenada1,grenada2,grenada3,grenada4,grenada5];
    } 
}
class Info{
    img = new SysImages();
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
        header: "CONTACT US",
        list: [
            {name: "example@gmail.com", style: "footer-content-items", hover: "footer-content-items-hover"},
            {name: "1 (473) 999-9999", style: "footer-content-items", hover: "footer-content-items-hover"},
            {name: "or", style: "footer-content-items", hover: ""},
            {name: "1 (473) 999-8888", style: "footer-content-items", hover: "footer-content-items-hover"},
        ]
    }
    services = {
        header: "SERVICES",
        subHeader: "Industries and Consulting Services",
        list: [
            "Gain Market Sector Knowledge",
            "Planning and task",
            "Vendor Sourcing",
            "Custom Brokerage Services",
            "Government Tax Reporting & Compliances",
            "Business Start-up Consultation",
            "Business Proposal Writing",
            "Financial Planning and Management",
            "Business branding and marketing",
            "Payroll Management",
            "Customer services training",
            "IT Support (website and App Development)",
            "Product Development",
            "Business registration and Incorporation",
            "NIS and VAT compliance services",
            "Construction Project Management",
            "Energy Management",
        ]
    }
    location = {
        header: "HEAD OFFICE LOCATION",
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
            title: "Consulting Services",
            subTitle: "Industries",
            note: "Gain Market Sector Knowledge",
            image: this.img.vendering2
        },{
            title: "Consulting Services",
            subTitle: "Industries",
            note: "Vendor Sourcing",
            image: this.img.vendering
        },{
            title: "Consulting Services",
            subTitle: "Industries",
            note: "Custom Brokerage Services",
            image: this.img.brokerage
        }
    ]
    pricing = {
        header: "OUR PRICING MODEL",
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
        header: "BENEFITS OF HIRING GRENADA MANAGEMENT CONSULTING SERVICES (GMCS)",
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
    headerViewShow(){
        tools.click.id("header-top-view-show");
    }
    headerViewHide(){
        tools.click.id("header-top-view-hide");
    }
}
class Tools{
    images = new SysImages();
    click = new Clicks();
    open = new Clicks();
    info = new Info();
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