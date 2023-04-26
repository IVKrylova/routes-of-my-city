import { BASE_URL } from './constants';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const getQuests = () => {
  return fetch(`${BASE_URL}/questapp/quests/`)
    .then(checkResponse)
}
