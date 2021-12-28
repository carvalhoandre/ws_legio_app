import axios from "axios";

const API_URL = "https://legio-app.herokuapp.com"

export function createLegio(creds) {
    return axios.post(`${API_URL}/legio`, creds)
}

export function createAttendance(creds) {
    return axios.post(`${API_URL}/attendance`, creds)
}

export function getLegios() {
    return axios.get(`${API_URL}/legio`);
}