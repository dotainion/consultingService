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
import cost from '../images/cost.jpg';
import benefiticon from '../images/benefiticon.png';
import businessplan from '../images/businessplan.jpg';
import planning from '../images/planning.jpg';
import learning from '../images/learning.jpg';
import marketing from '../images/marketing.png';
import acountsandtax from '../images/acountsandtax.jpg';
import clientbg from '../images/clientbg.jpg';
import fingerpoint from '../images/fingerpoint.jpg';
import logo from '../images/logo.png';
import byMonthly from '../images/byMonthly.jpg';
import byRoi from '../images/byRoi.png';
import byProject from '../images/byProject.jpg';
import hourlyrates from '../images/hourlyrates.png';
import buildingBlocks from '../images/buildingblocks.jpg';

import advertise from '../images/advertise.jpg';
import webDesign from '../images/webDesign.jpg';
import posterDesign from '../images/posterDesign.jpg';
import businessCardDesign from '../images/businessCardDesign.jpg';
import flyersDesign from '../images/flyersDesign.jpg';
import logoDesign from '../images/logoDesign.png';
import realEstate from '../images/realEstate.jpg';
import governmentTaxes from '../images/governmentTaxes.jpg';
import creativeStartUps from '../images/creativeStartUps.jpg';
import proposal from '../images/proposal.jpg';
import financialPlanning from '../images/financialPlanning.jpg';
import branding from '../images/branding.jpg';
import payroll from '../images/payroll.jpg';
import customerService from '../images/customerService.jpg';
import development from '../images/development.jpg';
import productDevelopment from '../images/productDevelopment.png';
import businessRegistration from '../images/businessRegistration.jpg';
import vatCompliance from '../images/vatCompliance.jpg';
import construction from '../images/construction.jpg';
import energyManagement from '../images/energyManagement.jpg';
import benefits from '../images/benefits.jpg';
import bgImg from '../images/bgImg.jpg';
import bgImg2 from '../images/bgImg2.jpg';


import { peopleCircle, pricetag, pricetagOutline, rocketOutline } from 'ionicons/icons';

import { FaMoneyBill, FaCoins, FaInstagram, FaLightbulb , FaDonate, FaGlobe, FaRegCalendarCheck, FaPeopleCarry, FaChartLine, FaLaptopCode, FaNetworkWired, FaFacebook } from "react-icons/fa";
import { GiHamburgerMenu } from 'react-icons/gi';


class Picture{
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
    cost = cost;
    benefiticon =benefiticon;
    businessplan = businessplan;
    planning = planning;
    learning = learning;
    marketing = marketing;
    acountsandtax = acountsandtax;
    clientbg = clientbg;
    fingerpoint = fingerpoint;
    logo = logo; 
    buildingBlocks = buildingBlocks;
    chargeByMonthly = byMonthly;
    chargeByRoi = byRoi;
    chargeByProject = byProject;
    chargeByHourlyrates = hourlyrates;
    advertise = advertise;
    webDesign = webDesign;
    posterDesign = posterDesign;
    businessCardDesign = businessCardDesign;
    flyersDesign = flyersDesign;
    logoDesign = logoDesign;
    realEstate = realEstate;
    governmentTaxes = governmentTaxes;
    creativeStartUps = creativeStartUps;
    proposal = proposal;
    financialPlanning = financialPlanning;
    branding = branding;
    payroll = payroll;
    customerService = customerService;
    development = development;
    productDevelopment = productDevelopment;
    businessRegistration = businessRegistration;
    vatCompliance = vatCompliance;
    construction = construction;
    energyManagement = energyManagement;
    benefits = benefits;
    bgImg = bgImg;
    bgImg2 = bgImg2;

    grenada(){
        return [grenada1,grenada2,grenada3,grenada4,grenada5];
    } 
}
class Icons{
    peopleCircle = peopleCircle;
    rocketOutline = rocketOutline;
    pricetagOutline = pricetagOutline;
    pricetag = pricetag;

    moneyBill = FaMoneyBill;
    coins = FaCoins;
    benefit = FaDonate;
    glob = FaGlobe;
    calendar = FaRegCalendarCheck;
    training = FaPeopleCarry;
    sales = FaChartLine;
    software = FaLaptopCode;
    fiberOptic = FaNetworkWired;
    idea = FaLightbulb;
    facebook = FaFacebook;
    instagram= FaInstagram; 
    menu = GiHamburgerMenu;
}
class Images{
    icons = new Icons();
    picture = new Picture();
}

const images = new Images();
export { images }