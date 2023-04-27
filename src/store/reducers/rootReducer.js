import { combineReducers } from 'redux';
import { questsReducer } from './questsReducer';

export const rootReducer = combineReducers({
  quests: questsReducer,
});
