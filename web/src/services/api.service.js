import axios from "axios";

const http = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api'
});

http.interceptors.request.use(function (config) {
    config.headers.authorization = `BEARER ${localStorage.getItem("token")}`;
    return config;
});

http.interceptors.response.use(
    function (response) {
        return response;
    }
);

export function getArtist(id) {
    return http.get(`/artist/${id}`, id);
}

export function getArtists(id) {
    return http.get(`/artists/${id}`);
}

export function getList(id) {
    return http.get(`/list/${id}`, id);
}

export function getLists(id) {
    console.log(id);
    return http.get(`/lists/${id}`);
}