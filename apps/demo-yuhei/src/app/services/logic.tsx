import { ActionTypes } from "./facade";

const ROOT = 'http://localhost:5050';
const API_USERS = `${ROOT}/users`;
const API_TRACKS = `${ROOT}/tracks`;

const selectedUser = {value: null};
const selectedTrack = {value: null};

const fetchUsers = () => {
    return fetch(API_USERS).then(res => res.json());
}
const fetchTracks = () => {
    return fetch(API_TRACKS).then(res => res.json());
}
const searchTrackByName = name => {
    return fetch(API_TRACKS + '?name_like=' + name).then(res => res.json);
}

export const engine = action => {
    switch (action.type) {
        case ActionTypes.NAVIGATE:
            return;
        case ActionTypes.TRACK_GET_LIST:
            return fetchTracks();
        case ActionTypes.TRACK_SEARCH:
            return searchTrackByName(action.data);
        case ActionTypes.TRACK_SELECT:
            selectedTrack.value = action.data;
            return Promise.resolve(selectedTrack);
        case ActionTypes.USER_GET_LIST:
            return fetchUsers();
        case ActionTypes.USER_SELECT:
            selectedUser.value = action.data;
            return Promise.resolve(selectedUser);
    }
}