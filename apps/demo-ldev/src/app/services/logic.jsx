import {ActionTypes} from'./facade'

//const ROOT ='1dd54d79';
//const API_USERS = `https://${ROOT}.ngrok.io/users`;
//const API_TRACKS =`https://${ROOT}.ngrok.io/tracks`;

const API_USERS = `http://7e9ea9dc.ngrok.io/users`;
const API_TRACKS =`http://7e9ea9dc.ngrok.io/tracks`;

const selecteUsers=()=>{};
const selecteTracks=()=>{};

const fetchUsers =()=>{
    return fetch(API_USERS).then(res=> res.json())
};
const fetchTracks =()=>{
    return fetch(API_TRACKS).then(res=> res.json())
};
const fetchTracksByName =name =>{
    return fetch(API_TRACKS + '?name_like=' + name).then(res=> res.json())
};

export const engine = action =>{

    switch (action.type) {
    
        case ActionTypes.NAVIGATE:
            return;
            
        case ActionTypes.TRACK_SEARCH:
            return;

        case ActionTypes.TRACK_SELECT:
            selecteTracks.value =action.data;
            return Promise.resolve(selecteTracks);

        case ActionTypes.TRACK_GET_LIST:
            return fetchTracks();

        case ActionTypes.USERS_SELECT:
            selecteUsers.value =action.data;
            return Promise.resolve(selecteUsers);

        case ActionTypes.USER_GET_LIST:
            return fetchUsers();     
    }
}