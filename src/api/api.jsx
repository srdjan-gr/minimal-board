import axios from "axios";

// const baseURL = process.env.REACT_APP_BACKEND_URL;
// const baseURL = 'http://localhost:8080/srdjan/minimal-board-api/api/v1/';
const baseURL = 'http://localhost:8080/srdjan/minimal-board-api/api/v2/';
// const baseURL = 'https://www.mb.smiliesonline.com/api/api/v2/';
// let headers: {};

const api = axios.create({
    baseURL: baseURL,
    // headers,
});

export default api

