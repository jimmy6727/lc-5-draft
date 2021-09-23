import CONSTANTS from "./constants";

//axios networking
const axios = require('axios').default;
const APIClient = axios.create({
    baseURL: CONSTANTS.BASE_API_URL,
    headers:{
        'dealsAPIKey':CONSTANTS.BASE_API_KEY,
        'content-type': 'application/x-www-form-urlencoded'
    }
})


export default APIClient