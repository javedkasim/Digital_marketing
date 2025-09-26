import axios from "axios";

export const softwareBaseUrl = axios.create({
    baseURL:"http://localhost:5299/software",

});
