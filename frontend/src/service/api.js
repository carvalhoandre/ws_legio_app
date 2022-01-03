import axios from "axios";
import moment from 'moment'
import 'moment/locale/pt-br'

const API_URL = "https://legio-app.herokuapp.com"

export function createLegio(creds) {
    return axios.post(`${API_URL}/legio`, creds)
}

export function createAttendance(creds) {
    return axios.post(`${API_URL}/attendance`, creds)
}


export function createAllAttendance(creds) {
    return axios.post(`${API_URL}/attendance/all`, creds)
}

export function getLegios() {
    return axios.get(`${API_URL}/legio`);
}