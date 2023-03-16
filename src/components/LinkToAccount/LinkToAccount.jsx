import './LinkToAccount.scss';

const LinkToAccount = (props) => {
  // ToDo: get data from API
  // ToDo: set up routing
  return (
    <button
      className='link-to-account'
      onClick={props.handleClickLinkToAccount}
    >
      Ч
    </button>
  );
}

export default LinkToAccount;
