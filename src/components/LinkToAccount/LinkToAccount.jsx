import './LinkToAccount.scss';

const LinkToAccount = (props) => {
  // ToDo: get data from API
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
