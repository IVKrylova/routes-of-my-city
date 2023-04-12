import { useState } from 'react';
import './FormChoiceCategory.scss';

const FormChoiceCategory = (props) => {
  const [category, setCategory] = useState('Генералы');
  const classButtonList = `form-choice-category__button-list ${props.isOpenPopup ? 'form-choice-category__button-list_popup' : ''}`;
  const classButtonSubmit = `form-choice-category__button-submit ${props.isOpenPopup ? 'form-choice-category__button-submit_popup' : ''}`;

  const chengeCategory = (evt) => {
    setCategory(evt.target.value);
 }

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    props.sendCategory(category);
  }

  return (
    <form className={`form-choice-category ${props.classModifier ? props.classModifier : ''}`}
      onSubmit={handleFormSubmit}
    >
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
                onChange={chengeCategory}
                checked={category === el.name}
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
      <ul className={classButtonList}>
        <li>
          <button
            type='submit'
            className={classButtonSubmit}
          >
            {props.isOpenPopup ? 'Сохранить' : 'Участвовать'}
          </button>
        </li>
        <li>
          <button
            type='button'
            className='form-choice-category__button-cancel'
            onClick={props.handleCancelClick}
          >
            Отмена
          </button>
        </li>
      </ul>
    </form>
  );
}

export default FormChoiceCategory;
