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

export function getArtistTopTracks(id) {
    return http.get(`/artist/${id}/top-tracks`);
}

export function getAlbum(id) {
    console.log('ALBUM',id);

    return http.get(`/album/${id}`, id);
}

export function getAlbums(id) {
    console.log('todo',id);
    return http.get(`/albums/${id}`);
}
