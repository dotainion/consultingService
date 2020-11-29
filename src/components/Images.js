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