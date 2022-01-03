import axios from "axios";

const API_URL = "https://legio-app.herokuapp.com"

// legio
export function createLegio(creds) {
    return axios.post(`${API_URL}/legio`, creds)
}

export function getLegios() {
    return axios.get(`${API_URL}/legio`);
}

// attendance
export function createAttendance(creds) {
    return axios.post(`${API_URL}/attendance`, creds)
}

export function createAllAttendance(creds) {
    return axios.post(`${API_URL}/attendance/all`, creds)
}

// reccruitment
export function getRecruitmentForDate(date) {
    return axios.get(`${API_URL}/recruitment/date/${date}`)
}

export function createRecruitment(recruitment) {
    return axios.post(`${API_URL}/recruitment`, recruitment)
}

export function deleteRecruitment(id) {
    return axios.delete(`${API_URL}/${id}`)
}

//work
export function createWork(work) {
    return axios.post(`${API_URL}/work`, work)
}
