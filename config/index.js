const dev = process.env.NODE_ENV !== "production";

export const servidor_url = dev
  ? "http://localhost:3000"
  : "https://my-app-xkn2w.ondigitalocean.app";

export const backend_url = dev
  ? "http://localhost:3000"
  : "https://my-app-xkn2w.ondigitalocean.app";
// : "https://openagilestrapi.herokuapp.com/api";

export const expire_cookies_in_days = 7;

export const formEmail = dev ? "mail@robertpiper.de" : "kontakt@open-agile.de";
                                                            

//  "kontakt@open-agile.de";
// export const formEmail = "sam@jesamconsulting.com";
