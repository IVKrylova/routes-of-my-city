import { combineReducers } from 'redux';
import { questsReducer } from './questsReducer';
import { currentQuestReducer } from './currentQuestReducer';

export const rootReducer = combineReducers({
  quests: questsReducer,
  currentQuest: currentQuestReducer,
});
