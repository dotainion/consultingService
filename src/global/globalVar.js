
class Routes{
    Clients = "/clients";
    Design = "/design";
    Form = "/form";
    Offers = "/offers";
    Home = "/home";
    AboutUs = "/about/us";
    Pricing = "/program/model";
    Benefits = "/benefits";
}
class SiteUrl{
    academy = "http://www.caribbeancodingacademygrenada.com/";
}
class GlobalVar{
    route = new Routes();
    siteUrl = new SiteUrl();
}

const globalVar = new GlobalVar();
export { globalVar };