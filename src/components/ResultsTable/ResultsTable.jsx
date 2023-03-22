import './ResultsTable.scss';

const ResultsTable = (props) => {
  return (
    <div className='results-table'>
      <ul className='results-table__categories-list'>
        <li className='results-table__category'>Штатские</li>
        <li className='results-table__category'>Генералы</li>
        <li className='results-table__category'>Кадеты</li>
        <li className='results-table__category'>Покатушки</li>
        <li className='results-table__category'>Велопрофи</li>
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
        <tbody className='results-table__table-body'>
          {props.result &&
            props.result.map(el => {
              return (
                <tr key={el.id} className='results-table__row'>
                  <th className='results-table__col-number results-table__col-number_body'>{el.number}</th>
                  <th className='results-table__col-team'>
                    <span className='results-table__col-team-body'>{el.team}</span>
                  </th>
                  <th className='results-table__col-score'>{el.score}</th>
                  <th className='results-table__col-time'>{el.time}</th>
                </tr>
              );
            })
          }
        </tbody>
      </table>
      <button className='results-table__button-more' type='button'>
        Показать ещё
      </button>
    </div>
  );
}

export default ResultsTable;
