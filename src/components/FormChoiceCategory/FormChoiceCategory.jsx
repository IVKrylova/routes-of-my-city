import './FormChoiceCategory.scss';

const FormChoiceCategory = (props) => {
  return (
    <form className='form-choice-category'>
      <ul className='form-choice-category__category-list'>
        {props.questCategories && props.questCategories.map(el => {
        return (
          <li className='form-choice-category__category' key={el.id}>
            <label className='form-choice-category__label' htmlFor={el.id}>
              <input
                type='radio'
                className='form-choice-category__input'
                name='category'
                id={el.id}
                value={el.name}
              />
              <span className='form-choice-category__name'>
                {el.name}
              </span>
            </label>
            <p className='form-choice-category__short-descriplion'>
              {el.shortDescriplion}
            </p>
            {el.name !== 'Кадеты' &&
              <p className='form-choice-category__long-description'>
                {el.longDescription}
              </p>
            }
            {el.name === 'Кадеты' &&
              <>
                <p className='form-choice-category__long-description'>
                  {el.longDescription.split('\n')[0]}
                </p>
                <ul className='form-choice-category__long-description-list'>
                  {el.longDescription.split('\n').slice(1).map(item => {
                    return (
                      <li
                        key={el.longDescription.split('\n').slice(1).indexOf(item)}
                        className='form-choice-category__long-description-item'
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </>
            }
          </li>
        );
      })}
      </ul>
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
