const dev = process.env.NODE_ENV !== "production";

export const servidor_url = dev
  ? "http://localhost:3000"
  : "https://misitioweb.com";
