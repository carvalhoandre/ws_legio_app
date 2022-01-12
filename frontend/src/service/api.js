import axios from "axios";

const API_URL = "https://legio-app.herokuapp.com"

// legio
export function createLegio(creds) {
    return axios.post(`${API_URL}/legio`, creds)
}

export function getLegios() {
    return axios.get(`${API_URL}/legio`);
}

export function getBirthdayMonth(month) {
    return axios.get(`${API_URL}/legio/month/${month}`);
}

// attendance
export function createAttendance(creds) {
    return axios.post(`${API_URL}/attendance`, creds)
}

export function createAllAttendance(creds) {
    return axios.post(`${API_URL}/attendance/all`, creds)
}

export function getAttendanceForDate(date) {
    return axios.get(`${API_URL}/attendance/date/${date}`)
}

export function deleteAttendance(id) {
    return axios.delete(`${API_URL}/attendance/${id}`)
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

export function deleteWork(id) {
    return axios.delete(`${API_URL}/work/${id}`)
}

export function updateWork(work) {
    return axios.post(`${API_URL}/work/update`, work)
}

// event 
export function createEvent(event) {
    return axios.post(`${API_URL}/event`, event)
}

export function getEventForDate(date) {
    return axios.get(`${API_URL}/event/date/${date}`)
}

export function deleteEvent(id) {
    return axios.delete(`${API_URL}/event/${id}`)
}

export function updateEvent(event) {
    return axios.post(`${API_URL}/event/update`, event)
}

//ata
export function createAtaExtenso(ataExtenso) {
    return axios.post(`${API_URL}/ataExtenso`, ataExtenso)
}

export function getAtaForDate(date) {
    return axios.get(`${API_URL}/ataExtenso/date/${date}`)
}

export function deleteAta(id) {
    return axios.delete(`${API_URL}/ataExtenso/${id}`)
}

export function updateAta(ataExtenso) {
    return axios.post(`${API_URL}/ataExtenso/update`, ataExtenso)
}

//treasury
export function createTreasury(treasury) {
    return axios.post(`${API_URL}/treasury`, treasury)
}

export function getTreasuryForDate(date) {
    return axios.get(`${API_URL}/treasury/date/${date}`)
}

export function deleteTreasury(id) {
    return axios.delete(`${API_URL}/treasury/${id}`)
}

export function updateTreasury(treasury) {
    return axios.post(`${API_URL}/treasury/update`, treasury)
}