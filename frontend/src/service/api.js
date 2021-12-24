import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
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

export const getLegios = () => {
    return api.get("/legio", {
        observe: 'response',
    })
}

export default api;