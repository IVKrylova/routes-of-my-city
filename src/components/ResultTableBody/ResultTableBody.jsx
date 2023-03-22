import './ResultTableBody.scss';

const ResultTableBody = (props) => {
  return (
    <tbody className='results-table-body'>
      {props.result && props.result.map(el => {
        return (
          <tr key={el.id} className='results-table-body__row'>
            <td className='results-table-body__col-number'>{el.number}</td>
            <td className='results-table-body__col-team'>
              <span className='results-table-body__team-name'>{el.team}</span>
            </td>
            <td className='results-table-body__col-score'>{el.score}</td>
            <td className='results-table-body__col-time'>{el.time}</td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default ResultTableBody;
