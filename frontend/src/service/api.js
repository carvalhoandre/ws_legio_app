import axios from "axios";

const api = axios.create({
    baseURL: 'https://legio-app.herokuapp.com'
});

export const createLegio = (creds) => {
    return api.post("/legio", creds,
        {
            observe: 'response',
            responseType: 'text'
        });
}

export default api;