import {ActionTypes} from'./facade'

//const ROOT ='./apps/API/data.json';
const API_USERS = `http://www.json-generator.com/api/json/get/bVVCPOqUXS?indent=2`;
const API_TRACKS =`http://www.json-generator.com/api/json/get/cfLAmukUia?indent=2`;

//const selecteUsers=()=>{};
//const selecteTracks=()=>{};


const selecteUsers ={value: null };
const selecteTracks ={value: null };

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