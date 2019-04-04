let apiUrl;
const apiUrls = {
  production: "https://sheltered-ridge-83464.herokuapp.com",
  development: "http://localhost:3001"
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

export default apiUrl;
