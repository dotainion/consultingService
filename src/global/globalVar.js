
class Routes{
    Default = "/";
    Test = "/testing";
    _404 = "/404";
    Clients = "/clients";
    Design = "/design";
    Form = "/form";
    Offers = "/offers";
    Home = "/home";
    AboutUs = "/about/us";
    Pricing = "/program/model";
    Benefits = "/benefits";
    FAQs = "/FAQ's";
    Sustainability = "/sustainability";
    Admin = "/gmcs473/admin";
    AdminLogin = "/gmcs473/admin/access";
    PropertyDevelper = "/property/developer";
    Neighborhood = "/neighborhood";
}
class SiteUrl{
    gmail = "https://mail.google.com/";
    academy = "http://www.caribbeancodingacademygrenada.com/";
}
class Ids{
    suggestionPopup = "suggestion-form";
}
class GlobalVar{
    id = new Ids();
    route = new Routes();
    siteUrl = new SiteUrl();
}

const globalVar = new GlobalVar();
export { globalVar };