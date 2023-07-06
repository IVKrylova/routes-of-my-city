import { currentQuestActionTypes } from '../actionTypes/currentQuest';

export const setCurrentQuest = (quest) => {
  return {
    type: currentQuestActionTypes.SET_CURRENT_QUEST,
    payload: quest,
  }
}
