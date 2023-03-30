import React from "react";
import { Form } from "../Form/Form";
function List({ count }) {
  return (

            <Form
              key={fieldset.id}
              formName={fieldset.formName}
              modifier={fieldset.modifier}
              register={register}
            />
  );
}
export default List;
