import { BASE_URL } from './constants';

export const getQuests = async () => {
  try {
    return await fetch(`${BASE_URL}/questapp/quests/`);
  } catch (err) {
    console.log(err);
  }
}
