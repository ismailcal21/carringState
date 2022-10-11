import React, { useState } from "react";

const Input = (props) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value === "") {
      alert("Input cannot be empty");
      return;
    }
    setValue(props.setInput);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container my-5 d-flex justify-content-center">
        <div className="input-group mb-3 w-50 ">
          <input
            type="text"
            className="form-control"
            placeholder=" .   .   ."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <button type="submit" className="btn btn-primary" id="basic-addon2">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};
export default Input;
