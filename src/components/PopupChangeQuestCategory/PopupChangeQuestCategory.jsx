import GeneralPopup from '../GeneralPopup/GeneralPopup';
import FormChoiceCategory from '../FormChoiceCategory/FormChoiceCategory';
import PopupMessage from '../PopupMessage/PopupMessage';

const PopupChangeQuestCategory = (props) => {
  return (
    <GeneralPopup
      message='Изменения сохранены'
      isOpenPopup={props.isOpenPopup}
      onClosePopup={props.onClosePopup}
      isPopupSuccess={props.isPopupSuccess}
      goToHomePage={props.goToHomePage}
      textButtonCta='Сохранить'
      isOpenPopupChangeQuestCategory={props.isOpenPopupChangeQuestCategory}
    >
      <PopupMessage
        message='Смена категории'
        classModifier='popup-message_change-category'
      />
      <FormChoiceCategory
        questCategories={props.questCategories}
        handleCancelClick={props.handleCancelAndGoBack}
        sendCategory={props.sendCategory}
        classModifier='form-choice-category_popup'
        isOpenPopup={props.isOpenPopup}
        teamQuestList={props.teamQuestList}
        changedCategoryQuestId={props.changedCategoryQuestId}
      />
    </GeneralPopup>
  );
}

export default PopupChangeQuestCategory;
