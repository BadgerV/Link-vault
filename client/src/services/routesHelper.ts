const ENGINE_ENV = process.env.REACT_APP_ENGINE_ENV;
const REACT_APP_DEV_API_URL = process.env.REACT_APP_DEV_API_URL;
const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
const REACT_APP_DEV_CLIENT_URL = process.env.REACT_APP_DEV_CLIENT_URL;
const REACT_APP_CLIENT_URL = process.env.REACT_APP_CLIENT_URL;
const REACT_APP_DEV_ASSETS_URL = process.env.REACT_APP_DEV_ASSETS_URL;

let host = "";

if (ENGINE_ENV === "production") {
  host = REACT_APP_API_URL;
} else {
  host = REACT_APP_DEV_API_URL;
}

let client = "";
if (ENGINE_ENV === "production") {
  client = REACT_APP_CLIENT_URL;
} else {
  client = REACT_APP_DEV_CLIENT_URL;
}

export const hostRoute = host;

export const clientRoute = client;

export const allAssetsRoute = REACT_APP_DEV_ASSETS_URL;
