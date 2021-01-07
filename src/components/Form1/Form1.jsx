import React, { useState } from "react";
import { withRouter } from "react-router";
import "./Form1.scss";
import { useDispatch } from "react-redux";
import { SEND_PROJECT_DETAILS } from "../../store/Type.js";
import { connect } from "react-redux";

const Form1Component = (props) => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    name: "",
    description: "",
    client: "",
    contractor: "",
  });

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  };

  return (
    <div>
      <form className="formOne">
        <h1>Step 1</h1>
        <label>
          Project Name:
          <input
            type="text"
            name="projectName"
            onChange={handleChange("name")}
          />
        </label>
        <label>
          Project Description:
          <input
            type="text"
            name="projectDescription"
            onChange={handleChange("description")}
          />
        </label>
        <label>
          Client:
          <input type="text" name="client" onChange={handleChange("client")} />
        </label>
        <label>
          Contractor:
          <input
            type="text"
            name="contractor"
            value={values.contractor}
            onChange={handleChange("contractor")}
          />
        </label>
        <button
          type="submit"
          onClick={async (e) => {
            e.preventDefault();
            console.log(values);
            dispatch({ type: SEND_PROJECT_DETAILS, payload: values });
            props.history.push(`\step2`);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export const Form1 = connect()(withRouter(Form1Component));
