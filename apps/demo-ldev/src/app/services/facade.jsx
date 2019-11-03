import {engine} from './logic';

export const ActionTypes = {
  TRACK_GET_LIST: 'TRACK_GET_LIST',
  TRACK_SEARCH: 'TRACK_SEARCH',
  TRACK_SELECT: 'TRACK_SELECT',
  NAVIGATE: 'NAVIGATE',
  USER_SELECT: 'USER_SELECT',
  USER_GET_LIST: 'USER_GET_LIST'
};

export class Action {
  constructor(type, data) {
    if (!Object.values(ActionTypes).includes(type)) throw 'Invalid Action Type';
    this.type = type;
    this.data = data;
  }
}

export const dispatch = action => {
  if (action.constructor !== Action) throw 'Invalid Action';
  console.log(action);
  return engine(action);
};
