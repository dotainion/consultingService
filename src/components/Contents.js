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
            name: "Aboutus/More",
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
                title: "Gain Market Sector Knowledge",
                content: "test contents",
                image: images.picture.learning
            },{
                title: "Planning and task",
                content: "test contents",
                image: images.picture.planning
            },{
                title: "Vendor Sourcing",
                content: "test contents",
                image: images.picture.vendering2
            },{
                title: "Custom Brokerage Services",
                content: "test contents",
                image: images.picture.brokerage
            },{
                title: "Government Tax Reporting & Compliances",
                content: "test contents",
                image: images.picture.governmentTaxes
            },{
                title: "Business Start-up Consultation",
                content: "test contents",
                image: images.picture.creativeStartUps
            },{
                title: "Business Proposal Writing",
                content: "test contents",
                image: images.picture.proposal
            },{
                title: "Financial Planning and Management",
                content: "test contents",
                image: images.picture.financialPlanning
            },{
                title: "Business branding and marketing",
                content: "test contents",
                image: images.picture.branding
            },{
                title: "Payroll Management",
                content: "test contents",
                image: images.picture.payroll
            },{
                title: "Customer services training",
                content: "test contents",
                image: images.picture.customerService
            },{
                title: "IT Support (website and App Development)",
                content: "test contents",
                image: images.picture.development
            },{
                title: "Product Development",
                content: "test contents",
                image: images.picture.productDevelopment
            },{
                title: "Business registration and Incorporation",
                content: "test contents",
                image: images.picture.businessRegistration
            },{
                title: "NIS and VAT compliance services",
                content: "test contents",
                image: images.picture.vatCompliance
            },{
                title:"Construction Project Management",
                content:"test contents",
                image: images.picture.construction
            },{
                title: "Energy Management",
                content: "test contents",
                image: images.picture.energyManagement
            },{
                title:" Real Estate Consultation and Development",
                content:  "test contents",
                image: images.picture.realEstate
            }
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
        ],
        more: [
            {
                title: "Look Professional",
                content: "Rather than just being the “corner shop” down the street, having a website (especially a well made one) gives the impression that you are serious, and ready to do business with all kinds of customers. It lends to the credibility mentioned in the survey result above."
            },{
                title: "Become An Information Resource",
                content: "If your business is in something of a niche industry, having a website is an excellent opportunity to build your reputation as an authority in your field. Create a blog section on your site with informative articles that take advantage of your experience. Potential customers doing web searches on common problems related to your industry will be more likely to find you – and after they read your blog articles, they’ll see how helpful you can be for them. According to one survey, 61% of consumers reported a blog influenced their decision to make a purchase. Even if those who read these blog posts don’t become customers right away, you’ve spread the name of your business without spending a dime on traditional advertising."
            },{
                title: "Own Your Name",
                content: "Creating a site and buying a domain name (www.businessexample.com) helps stake your claim to your business’s name, and is a quick and easy way to improve your brand identity."
            },{
                title: "Improve SEO Rankings",
                content: "When you search online through sites like Google, Bing, or Yahoo you will see a list of websites with answers to your request. There are SEO (Search Engine Optimization) tactics that you can apply to your company website to improve its rankings on those search engines."
            },{
                title: "Increase Leads From Online",
                content: "Gaining visitors to your website is good, but gaining customers is even better! With a well-optimized website, you get your potential leads to call, sign up, or purchase a product from your company. You can turn your website into a leading salesperson for your company."
            },{
                title: "Save Money on Printing",
                content: "Paper catalogs and brochures can still be helpful in point-of-sale situations, but what if item information changes? It is much easier to have all relevant info on your website, where it will be much cheaper to edit and revise. A combination of print and web marketing materials will likely be the most cost-effective way forward."
            },{
                title: "Be Where Your Customers Are. They’re On The Web.",
                content: `According to a 2015 study: about 43% of the entire planet’s population, over 3 billion people, have internet access.
                        In the US: a study from March 2018 found that only 11% of Americans do not use the internet. That means that most Americans have internet access, across all demographics (including income).
                        Even having a fundamental website is helpful. For many people, if they can’t find it online, it doesn’t exist as far as they are concerned.`
            },{
                title: "Help Train Staff",
                content: "If you’ve taken the time to build out a website with detailed info about products and services, you now have an information resource that is available for you to use internally. You can direct new employees to specific web pages and give them the “homework” of reading up on the products they will be selling."
            },{
                title: "Attract New Staff",
                content: "Create a “Careers” or “Job Opportunities” webpage on your site. You’ll be able to get potential job candidates to come to you, rather than spending time on trying to recruit employees or spending money placing listings on job websites."
            }
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
                image: images.picture.chargeByHourlyrates,
            },{
                name: "Charging by project",
                image: images.picture.chargeByProject,
            },{
                name: "Charging based on ROI",
                image: images.picture.chargeByRoi,
            },{
                name: "Charging an initial fee plus monthly retainer",
                image: images.picture.chargeByMonthly,
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
                route: globalVar.id.suggestionPopup,
                newTab: null
            }
        ]
    ];
    designs = [
        {
            title: "Logo Design",
            content: "Empowerment",
            image: images.picture.logoDesign
        },{
            title: "Flyers Design",
            content: "Empowerment",
            image: images.picture.flyersDesign
        },{
            title: "Business Cards",
            content: "Empowerment",
            image: images.picture.businessCardDesign
        },{
            title: "Poster Design",
            content: "Empowerment",
            image: images.picture.posterDesign
        },{
            title: "Web Design",
            content: "Empowerment",
            image: images.picture.webDesign
        },{
            title: "Advertising",
            content: "Empowerment",
            image: images.picture.advertise
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