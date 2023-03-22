import { useState, useEffect } from 'react';
import ResultTableBody from '../ResultTableBody/ResultTableBody';
import './ResultsTable.scss';

const ResultsTable = (props) => {
  const [isCurrentCategory, setIsCurrentCategory] = useState('Штатские');
  const [currentResult, setCurrentResult] = useState([]);

  const handleCategoryClick = (evt) => {
    setIsCurrentCategory(evt.target.textContent);
  }

  const getSortResult = (res) => {
    res.sort((a, b) => Number(a.number) - Number(b.number));
    setCurrentResult(res);
  }

  const setClassCategory = (category) => {
    return `results-table__category ${isCurrentCategory === category ? 'results-table__category_active' : ''}`;
  }

  // ToDo: check logic after connection with API
  useEffect(() => {
    getSortResult(props.result.filter(el => el.category === 'Штатские'));
  }, [props.result]);

  // ToDo: check logic after connection with API
  useEffect(() => {
    if (isCurrentCategory === 'Штатские') {
      const res = props.result.filter(el => el.category === 'Штатские');
      getSortResult(res);
    } else if (isCurrentCategory === 'Генералы') {
      const res = props.result.filter(el => el.category === 'Генералы');
      getSortResult(res);
    } else if (isCurrentCategory === 'Кадеты') {
      const res = props.result.filter(el => el.category === 'Кадеты');
      getSortResult(res);
    } else if (isCurrentCategory === 'Покатушки') {
      const res = props.result.filter(el => el.category === 'Покатушки');
      getSortResult(res);
    } else if (isCurrentCategory === 'Велопрофи') {
      const res = props.result.filter(el => el.category === 'Велопрофи');
      getSortResult(res);
    }
  }, [isCurrentCategory]);

  return (
    <div className='results-table'>
      {props.result && props.result.length > 0 &&
        <>
          <ul className='results-table__categories-list'>
            <li className={setClassCategory('Штатские')} onClick={handleCategoryClick}>
              Штатские
            </li>
            <li className={setClassCategory('Генералы')} onClick={handleCategoryClick}>
              Генералы
            </li>
            <li className={setClassCategory('Кадеты')} onClick={handleCategoryClick}>
              Кадеты
            </li>
            <li className={setClassCategory('Покатушки')} onClick={handleCategoryClick}>
              Покатушки
            </li>
            <li className={setClassCategory('Велопрофи')} onClick={handleCategoryClick}>
              Велопрофи
            </li>
          </ul>
          <table className='results-table__table'>
            <thead className='results-table__table-head'>
              <tr>
                <th className='results-table__col-number'>№</th>
                <th className='results-table__col-team'>Команда</th>
                <th className='results-table__col-score'>Баллы</th>
                <th className='results-table__col-time'>Время</th>
              </tr>
            </thead>
            <ResultTableBody
              result={currentResult}
            />
          </table>
          <button className='results-table__button-more' type='button'>
            Показать ещё
          </button>
        </>
      }
    </div>
  );
}

export default ResultsTable;
