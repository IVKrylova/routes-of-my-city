import { useEffect, useState } from 'react';
import './FormChoiceCategory.scss';

const FormChoiceCategory = ({ questCategories, isOpenPopup, sendCategory, classModifier, handleCancelClick }) => {
  const [category, setCategory] = useState('');
  const classButtonList = `form-choice-category__button-list ${isOpenPopup ? 'form-choice-category__button-list_popup' : ''}`;
  const classButtonSubmit = `form-choice-category__button-submit ${isOpenPopup ? 'form-choice-category__button-submit_popup' : ''}`;

  const chengeCategory = (evt) => {
    setCategory(evt.target.value);
 }

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    sendCategory(category);
  }

  useEffect(() => {
    if (questCategories.length > 0) {
     setCategory(questCategories[0].name);
    }
  }, [questCategories]);

  return (
    <form className={`form-choice-category ${classModifier ? classModifier : ''}`}
      onSubmit={handleFormSubmit}
    >
      <ul className='form-choice-category__category-list'>
        {questCategories && questCategories.map(el => {
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
              {el.short_description}
            </p>
            {el.name !== 'Кадеты' &&
              <p className='form-choice-category__long-description'>
                {el.long_description}
              </p>
            }
            {el.name === 'Кадеты' &&
              <>
                <p className='form-choice-category__long-description'>
                  {el.long_description.split('\n')[0]}
                </p>
                <ul className='form-choice-category__long-description-list'>
                  {el.long_description.split('\n').slice(1).map(item => {
                    return (
                      <li
                        key={el.long_description.split('\n').slice(1).indexOf(item)}
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
            {isOpenPopup ? 'Сохранить' : 'Участвовать'}
          </button>
        </li>
        <li>
          <button
            type='button'
            className='form-choice-category__button-cancel'
            onClick={handleCancelClick}
          >
            Отмена
          </button>
        </li>
      </ul>
    </form>
  );
}

export default FormChoiceCategory;
