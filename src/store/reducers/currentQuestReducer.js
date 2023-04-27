import { currentQuestActionTypes } from '../actionTypes/currentQuest';

const initialState = {
  currentQuest: {
    id: null,
    name: '',
    description: '',
    registration_start_at: '',
    start_at: '',
    end_at: '',
    stop_show_at: '',
    address: '',
    banner: '',
    status: '',
  },
}

export const currentQuestReducer = (state = initialState, action) => {
  switch(action.type) {
    case currentQuestActionTypes.SET_CURRENT_QUEST:
      return {
        ...state,
        currentQuest: action.payload,
      };
    default:
      return state;
  }
}
