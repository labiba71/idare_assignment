import React from "react";
import { connect } from "react-redux";

const FinalPageComponent = (props) => {
  return (
    <div style={{ width: "100%" }}>
      <table style={{ width: "100%", marginTop: "50px"  }}>
        <tr>
          <th style={{ textAlign: "left" }}>Project Name</th>
          <th style={{ textAlign: "left" }}>Project Description</th>
          <th style={{ textAlign: "left" }}>Client</th>
          <th style={{ textAlign: "left" }}>Contractor</th>
        </tr>
        <tr>
          <td>{props.projectDetails.name}</td>
          <td>{props.projectDetails.description}</td>
          <td>{props.projectDetails.client}</td>
          <td>{props.projectDetails.contractor}</td>
        </tr>
      </table>

      <table style={{ width: "100%", marginTop: "50px" }}>
        <tr>
          <th style={{ textAlign: "left" }}>Min X</th>
          <th style={{ textAlign: "left" }}>Max X</th>
          <th style={{ textAlign: "left" }}>Min Y</th>
          <th style={{ textAlign: "left" }}>Max Y</th>
          <th style={{ textAlign: "left" }}>Min Z</th>
          <th style={{ textAlign: "left" }}>Max Z</th>
        </tr>
        <tr>
          <td>{props.minMax.minX}</td>
          <td>{props.minMax.maxX}</td>
          <td>{props.minMax.minY}</td>
          <td>{props.minMax.maxY}</td>
          <td>{props.minMax.minZ}</td>
          <td>{props.minMax.maxZ}</td>
        </tr>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    projectDetails: state.project,
    minMax: state.minMax,
  };
};

export const FinalPage = connect(mapStateToProps, null)(FinalPageComponent);
