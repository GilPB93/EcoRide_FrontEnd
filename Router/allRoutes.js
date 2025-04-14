import Route from "./Route.js";

//Define here the routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", "/js/home.js"),
    new Route("/legal", "Mentions légales", "/pages/legal.html"),
    new Route("/contact", "Contact", "/pages/contact.html"),
    new Route("/signin", "Connexion", "/pages/signin.html"),
    new Route("/signup", "Inscription", "/pages/signup.html"),
    new Route("/passedtrips", "Historique des trajets passés", "/pages/passedtrips.html", "/js/passedtrips.js"),
    new Route("/tripsbooked", "Trajets réservés", "/pages/tripsbooked.html", "/js/tripsbooked.js"),




    
];


//Website's name : Route.title - websitename
export const websiteName = "EcoRide";