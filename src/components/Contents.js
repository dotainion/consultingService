import React from 'react';
import { images } from './Images';
import '../components/onHome/Stocks.css';
import { globalVar } from '../global/globalVar';

class Texts{

}
class Objects{
    aboutus = {
        header: "ABOUT US",
        list: [
            {
                name: "About GCMS",
                route: globalVar.route.AboutUs
            },{
                name: "FAQ’s",
                route: "#"
            },{
                name: "Clients",
                route: globalVar.route.Clients
            },{
                name: "Video",
                route: "#"
            },{
                name: "Sustainability",
                route: "#"
            },
        ]
    }
    headerLists = [
        {
            name: "Home",
            route: "/home",
            list: []
        },{
            name: "Service",
            route: globalVar.route.Offers,
            list: []
        },{
            name: "Aboutus",
            route: "#",
            list: this.aboutus.list
        },{
            name: "Program Model",
            route: globalVar.route.Pricing,
            list: []
        },{
            name: "Benefits",
            route: globalVar.route.Benefits,
            list: []
        },{
            name: "Contact",
            route: "/form",
            list: []
        }
    ];
    contact = {
        header: "CONTACT US",
        list: [
            {name: "gmcs473@gmail.com", style: "footer-content-items", hover: "footer-content-items-hover"},
            {name: "1 (473) 533-08399", style: "footer-content-items", hover: "footer-content-items-hover"},
            {name: "or", style: "footer-content-items", hover: ""},
            {name: "1 (473) 999-8888", style: "footer-content-items", hover: "footer-content-items-hover"},
        ]
    }
    services = {
        header: "SERVICES",
        subHeader: "Industries and Consulting Services",
        list: [
            {
                title:"Gain Market Sector Knowledge",
                content:"test contents"
            },{
                title:"Planning and task",
                content:"test contents"
            },{
                title:"Vendor Sourcing",
                content:"test contents"
            },{
                title:"Custom Brokerage Services",
                content:"test contents"
            },{
                title:"Government Tax Reporting & Compliances",
                content:"test contents"
            },{
                title:"Business Start-up Consultation",
                content:"test contents"
            },{
                title:"Business Proposal Writing",
                content:"test contents"
            },{
                title:"Financial Planning and Management",
                content:"test contents"
            },{
                title:"Business branding and marketing",
                content:"test contents"
            },{
                title:"Payroll Management",
                content:"test contents"
            },{
                title:"Customer services training",
                content:"test contents"
            },{
                title:"IT Support (website and App Development)",
                content:"test contents"
            },{
                title:"Product Development",
                content:"test contents"
            },{
                title:"Business registration and Incorporation",
                content:"test contents"
            },{
                title:"NIS and VAT compliance services",
                content:"test contents"
            },{
                title:"Construction Project Management",
                content:"test contents"
            },{
                title:"Energy Management",
                content:"test contents"
            },
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
    ];
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
            {
                name: "Gain access to expertise and knowledge immediately as a business startup or an entrepreneur.",
                image: images.picture.benefiticon
            },{
                name: "No NIS or taxes reporting, benefits, or human resource issues.",
                image: images.picture.benefiticon
            },{
                name: "Contract work is scalable",
                image: images.picture.benefiticon
            },{
                name: "Easy to terminate when no longer needed",
                image: images.picture.benefiticon
            },{
                name: "Independent advice",
                image: images.picture.benefiticon
            },{
                name: "Diversity of ideas from other experiences",
                image: images.picture.benefiticon
            },{
                name: "Flexible for project specific work",
                image: images.picture.benefiticon
            },
        ]
    }
    models = {
        header: "OUR PRICING MODEL",
        model: `Our management professional analyzes startups or small businesses and create
            solutions, while helping companies meet their goals. Clients have the option to
            receive help from GMCS, as they need it without any long-term Contracts. Clients
            purchase hours as needed for specific tasks and projects.",
            subHeader: "Our rates are based on these four models, customers have the options to
            select most effective option that benefit them.`,
        whyThisRates: "Our rates are based on these four models, customers have the options to select most effective option that benefit them.",
        list: [
            {
                name: "Charging by hourly rate-starting at EC$125",
                image: images.picture.businessplan,
            },{
                name: "Charging by project",
                image: images.picture.businessplan,
            },{
                name: "Charging based on ROI",
                image: images.picture.businessplan,
            },{
                name: "Charging an initial fee plus monthly retainer",
                image: images.picture.businessplan,
            },
        ]
    }
    stocks = [
        [
            {
                title: "Benefits of CMCS",
                subTitle: "Empowerment",
                content: "",
                icon: images.icons.benefit,
                route: "#",
                newTab: false
            },{
                title: "Our Pricing Model",
                subTitle: "Empowerment",
                content: "",
                icon: images.icons.coins,
                route: globalVar.route.Pricing,
                newTab: false
            },{
                title: "Our Services",
                subTitle: "Empowerment",
                content: "",
                icon: images.icons.glob,
                route: globalVar.route.Offers,
                newTab: false,
            }
        ],[
            {
                title: "Business Planing Guide",
                subTitle: "Empowerment",
                content: "",
                icon: images.icons.calendar,
                route: "#",
                newTab: false
            },{
                title: "Marketing",
                subTitle: "Empowerment",
                content: "",
                icon: images.icons.sales,
                route: "#",
                newTab: false
            },{
                title: "Training Service",
                subTitle: "Empowerment",
                content: "",
                icon: images.icons.training,
                route: "#",
                newTab: false
            }
        ],[
            {
                title: "IT Software Engineering",
                subTitle: "Empowerment",
                content: "",
                icon: images.icons.software,
                route: globalVar.siteUrl.academy,
                newTab: true
            },{
                title: "Fibre Optics",
                subTitle: "Empowerment",
                content: "",
                icon: images.icons.fiberOptic,
                route: "#",
                newTab: false
            },{
                title: "Suggest your idea",
                subTitle: "Empowerment",
                content: "",
                icon: images.icons.idea,
                route: "#",
                newTab: false
            }
        ]
    ];
    designs = [
        {
            title: "Logo Design",
            content: "Empowerment",
            image: images.picture.acountsandtax
        },{
            title: "Flyers Design",
            content: "Empowerment",
            image: images.picture.acountsandtax
        },{
            title: "Business Cards",
            content: "Empowerment",
            image: images.picture.acountsandtax
        },{
            title: "Poster Design",
            content: "Empowerment",
            image: images.picture.acountsandtax
        },{
            title: "Web Design",
            content: "Empowerment",
            image: images.picture.acountsandtax
        },{
            title: "Advertising",
            content: "Empowerment",
            image: images.picture.acountsandtax
        }
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