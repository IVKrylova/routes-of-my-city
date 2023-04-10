// ToDo: check with API
export const INITIAL_STATE_TEAM = {
  id: null,
  members: {
    0: {
      status: '',
      name: '',
      phone: '',
      email: '',
      birthday: '',
      id: null,
    }
  },
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

export const INITIAL_STATE_CURRENT_QUEST = {
  id: null,
  name: '',
  description: '',
  date: '',
  time: '',
  place: '',
  isActive: true,
  isCompleted: false,
  img: '',
};

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

export const DATA_DIGITS = 6;
