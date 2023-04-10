import imgTask from '../../images/img-task.png';

export const taskItem = {
  id: 0,
  number: 24,
  name: 'Успех',
  img: imgTask,
  problem: `Думаю, для вас не секрет, где в городе производят самый популярный «алкогольный сувенир» Ставропольского края.\nНа другой стороне улицы вы сможете найти сказочный замок за стеклянным забором и необычное транспортное средство\nВнимательно исследуйте экспонат и запишите номер Элис.`,
  // response parameters, validation
 /*  response: {
    type: 'text',
    lengthStr: 13,
  }, */
  /* response: {
    type: 'number',
    digits: 3,
  } */
  response: {
    type: 'date',
  }
};
