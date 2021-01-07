import React, { useState } from "react";
import { connect } from "react-redux";
import "./Form2.scss";
import { CSVReader } from "react-papaparse";
import { SEND_XYZ_VALUE } from "../../store/Type.js";
import { useDispatch } from "react-redux";

const Form2Component = (props) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    minX: "",
    maxX: "",
    minY: "",
    maxY: "",
    minZ: "",
    maxZ: "",
  });

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  };
  const handleOnDrop = (data) => {
    try {
      const parsedData = data.map((element) => {
        return element.data[0];
      });

      const toNumbers = (arr) => arr.map(Number);
      const xVal = toNumbers(parsedData);
      const xValFinal = xVal.slice(1);
      console.log(Math.max(...xValFinal));
    } catch (error) {
      //TODO: catch console in logger.
    }
  };

  return (
    <div className="main">
      <h1>Step 2</h1>
      <label>
        Project Name:
        <input value={props.projectDetails.name} disabled />
      </label>
      <label>
        Project Description:
        <input value={props.projectDetails.description} disabled />
      </label>
      <label>
        Client:
        <input value={props.projectDetails.client} disabled />
      </label>
      <label>
        Contractor:
        <input value={props.projectDetails.contractor} disabled />
      </label>
      <h2>csv File Upload: </h2>
      <CSVReader onDrop={handleOnDrop} noClick addRemoveButton>
        <span>Drop CSV file here to upload.</span>
      </CSVReader>
      <label>
        Min_X:
        <input name="minX" onChange={handleChange("minX")} />
      </label>
      <label>
        Max_X:
        <input name="maxX" onChange={handleChange("maxX")} />
      </label>
      <label>
        Min_Y:
        <input name="minY" onChange={handleChange("minY")} />
      </label>
      <label>
        Max_Y:
        <input name="maxY" onChange={handleChange("maxY")} />
      </label>
      <label>
        Min_Z:
        <input name="minZ" onChange={handleChange("minZ")} />
      </label>
      <label>
        Max_Z:
        <input name="maxZ" onChange={handleChange("maxZ")} />
      </label>
      <button
        type="submit"
        onClick={async (e) => {
          e.preventDefault();
          console.log(values);
          dispatch({ type: SEND_XYZ_VALUE, payload: values });
          props.history.push(`\step3`);
        }}
      >
        Submit
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    projectDetails: state.project,
  };
};

export const Form2 = connect(mapStateToProps, null)(Form2Component);
