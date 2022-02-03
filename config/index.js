const dev = process.env.NODE_ENV !== "production";

export const servidor_url = dev
  ? "http://localhost:3000"
  : "https://js-agileweb.netlify.app";


export const expire_cookies_in_days = 7;



export const formEmail = dev
?"renedp1975@gmail.com"
:"kontakt@open-agile.de";


//  "kontakt@open-agile.de";
// export const formEmail = "renedp1975@gmail.com";
