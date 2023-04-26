// ToDo: delete after getting data with API
import kislovodsk from '../../images/quest-kislovodsk.png';
import stavropol from '../../images/quest-stavropol.png';




// address: "Адрес открытого квеста"
// banner: "https://mycitybackend.pythonanywhere.com/media/quests/doctor.png"
// description: "Открытый квест"
// end_at: "2023-04-26T15:18:29Z"
// id: 1
// name: "Open"
// registration_start_at: "2023-04-23T15:18:06Z"
// start_at: "2023-04-25T15:18:19Z"
// status: "active"
// stop_show_at: "2023-04-27T15:18:38Z"



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
    isCompleted: true,
    img: stavropol,
  },
];
