import { questsActionTypes } from '../actionTypes/quests';

const initialState = {
  quests: [],
}

export const questsReducer = (state = initialState, action) => {
  switch(action.type) {
    case questsActionTypes.SET_QUESTS:
      return {
        ...state,
        quests: action.payload,
      };
    default:
      return state;
  }
}
