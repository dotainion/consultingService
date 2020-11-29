
class Routes{
    Clients = "/clients";
    Design = "/design";
    Form = "/form";
    Offers = "/offers";
    Home = "/home";
    AboutUs = "/about/us";
    Model = "/program/model";
    Benefits = "/benefits";
}
class GlobalVar{
    route = new Routes();
}

const globalVar = new GlobalVar();
export { globalVar };