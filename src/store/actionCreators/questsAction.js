import { questsActionTypes } from '../actionTypes/quests';

export const setQuests = (quests) => {
  return {
    type: questsActionTypes.SET_QUESTS,
    payload: quests,
  }
}
