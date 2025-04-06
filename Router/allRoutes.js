import Route from "./Route.js";

//Define here the routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/legal", "Mentions légales", "/pages/legal.html"),


];


//Website's name : Route.title - websitename
export const websiteName = "EcoRide";