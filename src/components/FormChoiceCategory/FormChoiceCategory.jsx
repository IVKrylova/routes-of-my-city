import './FormChoiceCategory.scss';

const FormChoiceCategory = (props) => {
  return (
    <form className='form-choice-category'>
      {props.questCategories && props.questCategories.map(el => {
        return (
          <label key={el.id} className='form-choice-category__category'>
            <input
              type='radio'
              className='form-choice-category__input'
              name='category'
              value={el.name}
            />
            <span className='form-choice-category__name'>
              {el.name}
            </span>
            <span className='form-choice-category__short-descriplion'>
                {el.shortDescriplion}
              </span>
            {el.name !== 'Кадеты' &&
              <span className='form-choice-category__long-description'>
                {el.longDescription}
              </span>
            }
            {el.name === 'Кадеты' &&
              <>
                <span className='form-choice-category__long-descriplion'>
                  {el.longDescription.split('\n')[0]}
                </span>
                <ul className='form-choice-category__long-descriplion-list'>
                  {el.longDescription.split('\n').slice(1).map(item => {
                    return (
                      <li key={el.longDescription.split('\n').slice(1).indexOf(item)}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </>
            }
          </label>
        );
      })}
      <ul className='form-choice-category__button-list'>
        <li>
          <button type='submit' className='form-choice-category__button-submit'>
            Учавствовать
          </button>
        </li>
        <li>
          <button type='button' className='form-choice-category__button-cancel'>
            Отмена
          </button>
        </li>
      </ul>
    </form>
  );
}

export default FormChoiceCategory;
