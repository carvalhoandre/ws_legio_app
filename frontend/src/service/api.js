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
    return axios.delete(`${API_URL}/recruitment/${id}`)
}

export function updateRecruitment(recruitment) {
    return axios.post(`${API_URL}/recruitment/update`, recruitment)
}

//work
export function createWork(work) {
    return axios.post(`${API_URL}/work`, work)
}

export function getWorkForDate(date) {
    return axios.get(`${API_URL}/work/date/${date}`)
}

// event 
export function createEvent(event) {
    return axios.post(`${API_URL}/event`, event)
}

export function getEventForDate(date) {
    return axios.get(`${API_URL}/event/date/${date}`)
}

//ata
export function createAta(ata) {
    return axios.post(`${API_URL}/ata`, ata)
}

export function createAtaExtenso(ataExtenso) {
    return axios.post(`${API_URL}/ataExtenso`, ataExtenso)
}

//treasury
export function createTreasury(treasury) {
    return axios.post(`${API_URL}/treasury`, treasury)
}