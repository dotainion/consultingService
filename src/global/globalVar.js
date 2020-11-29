
class Routes{
    Clients = "/clients";
    Design = "/design";
    Form = "/form";
    Offers = "/offers";
    Home = "/home";
}
class GlobalVar{
    route = new Routes();
}

const globalVar = new GlobalVar();
export { globalVar };