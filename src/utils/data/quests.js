// ToDo: delete after getting data with API
import kislovodsk from '../../images/quest-kislovodsk.png';
import stavropol from '../../images/quest-stavropol.png';

export const quests = [
  {
    id: 0,
    name: 'Мой Kисловодск',
    description: 'Большой велоквест',
    date: '31.06.2023',
    time: '10:00',
    place: 'Кисловодск, ул. Кирова, 1-а',
    isActive: true,
    isCompleted: false,
    img: kislovodsk,
  },
  {
    id: 1,
    name: 'Мой Cтаврополь',
    description: 'Большой велоквест',
    date: '31.06.2023',
    time: '10:00',
    place: 'Кисловодск, ул. Кирова, 1-а',
    isActive: false,
    isCompleted: false,
    img: stavropol,
  },
];
