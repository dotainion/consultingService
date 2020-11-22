import React from 'react';
import { images } from './Images';
import '../components/onHome/Stocks.css';

class Texts{

}
class Objects{
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
            image: images.picture.vendering2
        },{
            title: "Consulting Services",
            subTitle: "Industries",
            note: "Vendor Sourcing",
            image: images.picture.vendering
        },{
            title: "Consulting Services",
            subTitle: "Industries",
            note: "Custom Brokerage Services",
            image: images.picture.brokerage
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
    stocks = [
        [
            {
                title: "Benefits of CMCS",
                subTitle: "Empowerment",
                content: "",
                icon: images.icons.benefit
            },{
                title: "Our Pricing Model",
                subTitle: "Empowerment",
                content: "",
                icon: images.icons.coins
            },{
                title: "Our Services",
                subTitle: "Empowerment",
                content: "",
                icon: images.icons.glob
            }
        ],[
            {
                title: "Business Planing Guide",
                subTitle: "Empowerment",
                content: "",
                icon: images.icons.calendar
            },{
                title: "Marketing",
                subTitle: "Empowerment",
                content: "",
                icon: images.icons.sales
            },{
                title: "Training Service",
                subTitle: "Empowerment",
                content: "",
                icon: images.icons.training
            }
        ]
    ]
}
class Sentence{

}
class Contents{
    texts = new Texts();
    objects = new Objects();
    sentense = new Sentence();
}
const content = new Contents();
export { content };