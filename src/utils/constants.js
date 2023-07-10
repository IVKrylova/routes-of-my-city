// ToDo: check with API
export const INITIAL_STATE_TEAM = {
  id: null,
  members: [
    {
      status: '',
      name: '',
      phone: '',
      email: '',
      birthday: '',
      id: null,
    }
  ],
  name: '',
  quests: {
    0: {
      id: null,
      name: '',
      category: '',
      categoryDescription: ''
    }
  },
  membersNumber: null,
};

export const PATH_LIST = [
  '/',
  '/login',
  '/signup',
  '/profile',
  '/rules',
];

export const INITIAL_STATE_TASK = {
  id: null,
  number: null,
  name: '',
  img: '',
  problem: '',
  response: {
    type: '',
    lengthStr: null,
  }
};

export const DATE_DIGITS = 6;

export const BASE_URL = 'https://mycitybackend.pythonanywhere.com/api';
