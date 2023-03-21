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

      </table>
      <button className='results-table__button-more' type='button'>
        Показать ещё
      </button>
    </div>
  );
}

export default ResultsTable;
