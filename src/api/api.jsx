import axios from "axios";

// const baseURL = process.env.REACT_APP_BACKEND_URL;
const baseURL = 'http://localhost:8080/srdjan/todo-api/api/';
// let headers: {};

const api = axios.create({
    baseURL: baseURL,
    // headers,
});

export default api