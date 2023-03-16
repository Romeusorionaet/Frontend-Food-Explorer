import axios from "axios";

export const api = axios.create({
    baseURL: "https://myapifoodexplorer.onrender.com"
});
// https://myapifoodexplorer.onrender.com
// http://localhost:3333