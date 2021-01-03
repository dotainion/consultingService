
class Routes{
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
    admin = "/gmcs473/admin";
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