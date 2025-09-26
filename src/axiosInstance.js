import axios from "axios";

export const softwareBaseUrl = axios.create({
    baseURL:"https://digital-marketing-backend-4.onrender.com/software",

});
