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
                name: "About GMCS",
                route: globalVar.route.AboutUs
            },{
                name: "FAQ’s",
                route: globalVar.route.FAQs
            },{
                name: "Clients",
                route: globalVar.route.Clients
            },{
                name: "Business Designs",
                route: globalVar.route.Design
            },{
                name: "Sustainability",
                route: globalVar.route.Sustainability
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
            "GMCS is located on H.A. Blaize Street in St. George’s right behind the Fire Station on the Carenage in St. George’s Grenada. Our office is located on the third floor of the Caribbean Coding Building."
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
        subHeader: `Grenada Management Consulting Services (GMCS) is founded by experience key
            experts and non-key experts with over 20 years of management and business
            experiences. Out team has experience in starting companies and dealing with the
            early stages of a new business.
            Our clients receive assistance with a multitude of tasks and challenges, moreover,
            we can quickly create movement and momentum for clients when starting a new
            business. GMCS consulting services are here to help organizations improve their
            performance and efficiency.`,
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
                route: globalVar.route.Benefits,
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
                route: globalVar.route.Form,//temparary
                newTab: false
            },{
                title: "Marketing",
                subTitle: "Empowerment",
                content: "",
                icon: images.icons.sales,
                route: globalVar.route.Form,//temparary
                newTab: false
            },{
                title: "Training Service",
                subTitle: "Empowerment",
                content: "",
                icon: images.icons.training,
                route: globalVar.route.Form,//temparary
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
                route: globalVar.route.Form,//temparary
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
    ];
    sustainability = {
        objective: `Grenada Management Consulting Services business approach is to create long-term value by
            taking into consideration how an organization should operate in Grenada’s ecological, social
            and economic environment. We strongly believe that developing such strategies foster company
            longevity and leads to sustainability.`,
        reason: `We help companies manage their financial, social and environmental risks, obligations and
            opportunities. These three are commonly referred to as people, planet and profits.`,
        list: [
            {
                valuesAmount: "100%",
                values: "Strategic planning and implementation",
                linkName: "link name",
                link: "#"
            },{
                valuesAmount: "90%",
                values: "Growth and sustainability",
                linkName: "link name",
                link: "#"
            },{
                valuesAmount: "100%",
                values: "Business Model Design",
                linkName: "link name",
                link: "#"
            }
        ]
    }
    FAQs = [
        {
            FAQ: "What dose GMCS constulting service do?",
            answers: {
                header: "We help entrepreneurs get ready to raise capital. This usually consists of some or all of the following services:",
                list: [
                    "Business plan development",
                    "Financial forecast development",
                    "Pitch deck (investor presentation) preparation",
                    "Strategy development",
                    "Market research and analysis",
                    "Competitor research and analysis",
                    "Financial analysis",
                    "General coaching and advisory services",
                    "Capital formation strategy",
                ],
                ans: `Please note that we cannot help our clients raise capital.`,
                graph: ""
            }
        },{
            FAQ: "What industries do you specialize in?",
            answers: {
                header: "",
                list: [

                ],
                ans: `We take pride in our ability to learn the fundamentals of virtually any industry or technology quickly. Some of the markets we have served include green technologies, medical devices, biotechnology, Internet/e-commerce, telecommunications, distance education/e-learning, real estate, financial services, healthcare services, manufacturing, retail, food service, consumer products, media and entertainment, aerospace, artificial intelligence, enterprise software, insurance, energy, and networking. Having said that, we believe that the value we bring to the table is not industry expertise — which you already possess in abundance — but rather an understanding of what investors like to see in a potential opportunity.`,
                graph: ""
            }
        },{
            FAQ: "Can you guarantee that you plan will raise capital?",
            answers: {
                header: "",
                list: [

                ],
                ans: `Of course not. Nobody can make that guarantee (and if somebody ever makes that guarantee, it’s a good idea to run away quickly). A good plan is essential, but a plan alone will not get funded. Although we will do our best to help you prepare, we have no control over how well you present yourselves to investors, or how well you answer their questions. We can coach and we can mentor, but at the end of the day, it’s your business and you must close the deal.`,
                graph: ""
            }
        },{
            FAQ: "Can you help us raise money?",
            answers: {
                header: "",
                list: [

                ],
                ans: `We can sometimes make informal introductions to potential investors or other intermediaries. In general, only brokers licensed with the Financial Industry Regulatory Authority (FINRA) can legally arrange financing. Please seek legal counsel and make sure that any “finder” you talk to is properly licensed with FINRA before you hire them. Failing to do so may expose you and your company to significant liability.`,
                graph: ""
            }
        },{
            FAQ: "Do you ever invest in you clients?",
            answers: {
                header: "",
                list: [

                ],
                ans: `No, we are management consultants, not investors.`,
                graph: ""
            }
        },{
            FAQ: "Do we really need a business plan?",
            answers: {
                header: "",
                list: [

                ],
                ans: `If you run a business, then it’s probably safe to say yes. In fact, you may require more than one business plan: one for raising capital and one for running your business. The former is a compact, easily digested strategic document that is designed to persuade potential investors to pick up the phone and invite you to their offices for an initial meeting. The latter is a more detailed document serving as a day-to-day roadmap, detailing the tactics supporting your overall strategy. The former needs to be an attractive document that sells; the latter can be a collection of spreadsheets, lists, research summaries, and other documents stuffed in a binder that you refer to and update on a regular basis. We specialize in preparing the capital-raising business plan, but many of the by-products are suitable for use in the operating business plan.`,
                graph: ""
            }
        },{
            FAQ: "Why should we hire a consultant to write you business plan instead of doing it ourselves?",
            answers: {
                header: "",
                list: [

                ],
                ans: `You could easily spend 500 hours or more preparing an investor-grade business plan, financial forecast, and investor presentation, even if you have an MBA. This is time you should probably be spending building your team, product, distribution channels, and customer base. In addition to our expertise in preparing these materials, we offer independent, third-party insights into your business, and may raise questions that you might not have thought to ask.`,
                graph: ""
            }
        },{
            FAQ: "what makes your business plan so special?",
            answers: {
                header: "",
                list: [

                ],
                ans: `Most importantly, they work. In a world in which fewer than 1 in 250 business plans ever raise venture capital, we are happy to report that about half of our plans have raised capital, and a good portion of the rest resulted in an acquisition or currently have commitments for investment from prior round investors. Each plan is handcrafted to reflect the client’s specific circumstances, yet share attributes that investors find appealing.`,
                graph: ""
            }
        },{
            FAQ: "what makes your financial projections special?",
            answers: {
                header: "",
                list: [

                ],
                ans: `Balance sheets that balance. Cash flows, income statements, and balance sheets that tie together (you’d be surprised by how many consultants who don’t get the basics right). Fully assumption-driven, so that you can do what-if analyses. Depending on your needs, we can include a lot of very sophisticated features`,
                graph: ""
            }
        },{
            FAQ: "How dose the process work?",
            answers: {
                header: "Every situation is unique. However, some fairly common steps include the following:",
                list: [
                    "Initial discussion to understand your basic needs.",
                    "Review your existing materials (draft business plans, financials, market research, competitor research, etc.).",
                    "Follow-up discussion to clarify details and agree upon the scope and fees for the project.",
                    "Several in-depth discussions to better understand the details, develop strategies, and agree on all major elements of the business plan and financial model.",
                    "Conduct additional research, as needed.",
                    "Draft an Investor Presentation and review it with you to ensure that all parties agree on the high-level vision.",
                    "Draft the Executive Summary and review it with you to ensure that we all agree on the next level of detail.",
                    "Prepare a draft outline of the business plan for your review.",
                    "Begin filling in the details on the draft. Obtain and incorporate your feedback.",
                    "Incorporate your revenue and expense models into the financial model, and explain how it works so that you can take “ownership” of the financials.",
                    "Finalize all deliverables.",
                    "Coach you on the best way to deliver the investor presentation and on how to address questions.",
                    "Provide ongoing support, including making minor updates to the deliverables at no additional charge.",
                ],
                ans: `Depending on how we structure the project, you should expect to spend anywhere from 10-30 hours on the process over the course of a typical engagement.`,
                graph: ""
            }
        },{
            FAQ: "How long does it take?",
            answers: {
                header: "For a typical engagement, consisting of a business plan, financial forecast, and investor presentation, the typical time to completion is 6-8 weeks, as illustrated below. The actual time can be influenced by the quality of your existing materials, the level of your participation, the complexity of your market and business model, and our current workload.",
                list: [

                ],
                ans: `Some very simple projects can be completed in just a few days, and we have had other projects extend well over a year (of course these engagements involved much more than just business planning).`,
                graph: images.picture.howLongGraph
            }
        },{
            FAQ: "Cant you work any faster?",
            answers: {
                header: "",
                list: [

                ],
                ans: `Yes, but we may need to charge a “rush” fee. We typically work on multiple projects at any point in time, and rush projects can strain our schedules or inconvenience other clients.`,
                graph: ""
            }
        },{
            FAQ: "Will you agree with everything i say?",
            answers: {
                header: "",
                list: [

                ],
                ans: `Only if you’re always right. One of our jobs is to help you avoid mistakes. We’ll challenge your ideas and assumptions so that you’ll be ready for the tough questions when you meet with investors.`,
                graph: ""
            }
        },{
            FAQ: "What happens after you've delivered the final documents?",
            answers: {
                header: "",
                list: [

                ],
                ans: `We remain available, at no extra charge, to answer follow-up questions, provide advice, and to make minor changes to the documents we produced for you.`,
                graph: ""
            }
        },{
            FAQ: "How do you price your sservices?",
            answers: {
                header: "In general, we charge a pre-determined fixed fee. The fee is determined by:",
                list: [
                    "The scope of the project, in terms of the tasks and documents you require help with.",
                    "The sophistication and specific needs of your target audience.",
                    "The quality of your existing materials, including early drafts of business plans, financial forecasts, market research, competitive research, etc. For instance, if you have a recent, comprehensive research report from a major market research firm like Forrester, our effort can be significantly reduced.",
                    "The clarity of your vision for your business model, marketing and distribution strategy, financial plans, etc.",
                    "Your availability and willingness to participate in the preparation of the business plan, financial model, and investor presentation.",
                    "The complexity of your industry and business model.",
                    "The availability of industry information.",
                    "The desired timing relative to our workload. In general, “rush” jobs will carry a substantial premium over projects that can be completed as our schedule permits.",
                ],
                ans: `Because of these factors, the fees for a typical project, consisting of the preparation of an investor-grade business plan, financial forecast, and investor presentation, can range from a few thousand dollars to several tens of thousands of dollars. By the way, if you are “price shopping,” you should know that price doesn’t tell the whole story. After all, would you choose one car over another simply because of price? Of course not – there are many dimensions you need to consider.`,
                graph: ""
            }
        },{
            FAQ: "Are you worth the money?",
            answers: {
                header: "We believe we are, because:",
                list: [
                    "We Succeed: We are well aware that there are many low-end business plan consultants offering their services for under $5,000. Some of these consultants do fine work, but their typical client is the small business seeking SBA and bank loans, not venture capital. Consider that, even during the height of the market, fewer than 1 in 100 business plans that made it into the hands of a VC ever raised capital (and the number is probably worse than 1 in 250 today). Who do you think prepared many of those unsuccessful plans? On the other hand, well over half of our plans have raised capital.",
                    "Your Time is Too Valuable: Let’s consider a $20,000 engagement consisting of a sophisticated VC-grade plan, financials, and pitch deck. In our experience, it would take most entrepreneurs a minimum of 500 hours to create comparable materials. If you choose to do it yourself, you are implicitly valuing your time at just $40 per hour. Surely, you can create more value per hour for your venture by focusing on your product, customers, and distribution channels!",
                    "Professionalism Adds Value: We can complete the same engagement in about 100 hours. This implies a rate of $200 per hour. You’re probably paying your CPA at least $200 per hour, your attorney at least $300 per hour, and your name-brand management consultant at least $450 per hour. Yet these are all essentially commodities: a good attorney is easy to find, but a good business planner is very rare. We believe that our experience and specialized skills are a bargain compared to the many other professional services you employ."
                ],
                ans: ``,
                graph: ""
            }
        },{
            FAQ: "Will you take all or part of your fees in equity, or defer it untill after we raise capital?",
            answers: {
                header: "",
                list: [

                ],
                ans: `Only under extraordinary circumstances, and only if you are already generating revenues.`,
                graph: ""
            }
        },{
            FAQ: "What is your refund policy?",
            answers: {
                header: "",
                list: [

                ],
                ans: `Your initial payment is non-refundable. This is because by the time you have decided to hire us, we have already set aside time to work with you, and we may even have turned away other opportunities in order to provide you with the best possible experience. Subsequent payments are subject to a pro-rated refund if you choose to terminate the project before we have fully earned the subsequent payment. For example, suppose fees for your project are broken into three payments, each covering 20 hours of services. The initial payment covers the first 20 hours, and the second payment covers the next 20 hours. If you change your mind about the project after we have put a total of 30 hours into the project, you would be entitled to a refund for half of the second payment because we will only have earned 10 hours of it.`,
                graph: ""
            }
        },{
            FAQ: "Will you sign a non-disclosure agreement?",
            answers: {
                header: "",
                list: [

                ],
                ans: `Gladly. We prefer to use a Mutual NDA so that our own trade secrets can be protected as well.`,
                graph: ""
            }
        },{
            FAQ: "Can you send us samples of your work?",
            answers: {
                header: "",
                list: [

                ],
                ans: `We are unable to email you a sample, but you can view several of our plans on our website. If you would like a closer look, we can schedule an online screen sharing session via Skype, Google-meet, zoom, or in person in the form of a hard copy.`,
                graph: ""
            }
        },{
            FAQ: "Where are you located and how do you wok with clients outside of your local area?",
            answers: {
                header: "",
                list: [

                ],
                ans: `We are headquartered in Orange County, California, and have consultants in and around Boston, Los Angeles, San Francisco, Silicon Valley, New York, Austin, Seattle, Portland, Chicago, Phoenix, Orlando, Tampa, Pittsburgh, Washington DC, and other locations. We rely heavily on the phone, e-mail, fax, and online meeting tools, and have never met half of our clients. If desired, we are available to visit you at your offices for a day or two at a time.`,
                graph: ""
            }
        },{
            FAQ: "What do investors look for in a business plan?",
            answers: {
                header: "",
                list: [

                ],
                ans: `Our views are summarized in our white paper, Why Business Plans Don’t Get Funded.`,
                graph: ""
            }
        },{
            FAQ: "Under what circumstances dose it make sense for us to hire you?",
            answers: {
                header: "",
                list: [

                ],
                ans: `Many of our clients are looking to raise $5 million to $20 million of Series B or Series C funding. Some are looking to raise more; others are seeking angel financing of as little as $1 million. Our clients should have a realistic view about what types of businesses have a real chance of raising capital, and should have enough fuel in the tank to be able to go 6 months to a year before raising their next round of capital.`,
                graph: ""
            }
        },{
            FAQ: "Are your materials all that we need in order to start looking for capital?",
            answers: {
                header: "",
                list: [

                ],
                ans: `Not necessarily. Your attorney should be able to supply supplemental materials to ensure that your offering complies with state and federal securities regulations. You will also need to assemble all of the documents that investors typically review during the due diligence process, such as corporate by-laws, employment agreements, employee stock option plan, joint venture agreements, customer and supplier agreements, patent applications, etc.`,
                graph: ""
            }
        },{
            FAQ: "What your qualifications?",
            answers: {
                header: "",
                list: [

                ],
                ans: `We’re all experienced entrepreneurs. Many have MBAs from top schools. Most importantly, we have proven track records.`,
                graph: ""
            }
        },{
            FAQ: "Do you have referenes?",
            answers: {
                header: "",
                list: [

                ],
                ans: `Certainly. We would be pleased to introduce you to our past clients. However, in order to respect the time and generosity of our past clients, we provide references as the final step before you sign the engagement letter.`,
                graph: ""
            }
        },{
            FAQ: "How long will it take us to raise capital?",
            answers: {
                header: "",
                list: [

                ],
                ans: `If you have everything investors are looking for, perhaps 6-12 months. A few raise capital more quickly. Some never raise any capital. A lot depends on the nature of your opportunity and the effort you put into the pursuit of capital.`,
                graph: ""
            }
        },{
            FAQ: "Is our company at the right stage to be looking for capital?",
            answers: {
                header: "",
                list: [

                ],
                ans: `We would be happy to assess your situation, free of charge. Please contact us.`,
                graph: ""
            }
        },{
            FAQ: "Is venture capital right for us?",
            answers: {
                header: "",
                list: [

                ],
                ans: `We would be happy to assess your situation, free of charge`,
                graph: ""
            }
        },{
            FAQ: "What is the origin of GMCS consulting's name?",
            answers: {
                header: "GMCS Consulting is a name abbreviated 'Grenada management Consulting Service'",
                list: [

                ],
                ans: `GMCS's founder, Clifford Browne, He formed the company in early ###.`,
                graph: ""
            }
        },
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