import React, { useState } from "react";

const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    onChange: e => setValue(e.target.value),
    resetValue: () => {
      setValue("");
    }
  };
};
export default ({ onSubmit }) => {
  const { resetValue, ...text } = useInputValue("");
  return (
    <form
      className="form"
      onSubmit={e => {
        e.preventDefault();
        onSubmit(text.value);
        resetValue();
      }}
    >
      <div className="form-group row">
        <label htmlFor="val" className="col-sm-2 col-form-label">
          Todo
        </label>
        <div className="col-sm-5">
          <input type="text" {...text} name="val" className="form-control" />
        </div>
      </div>
    </form>
  );
};
