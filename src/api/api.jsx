import axios from "axios";

// const baseURL = process.env.REACT_APP_BACKEND_URL;
// const baseURL = 'http://localhost/minimal-board-api/api/v2/';
const baseURL = 'https://www.mb.smiliesonline.com/api/api/v2/';
// let headers: {};



// const baseURL = '../api/v2/';

const api = axios.create({
    baseURL: baseURL,
    // headers,s
});

export default api

