import React from "react";

export default function (props) {
  return (
    <div>
      <div className="Chip-root makeStyles-chipBlue-108 Chip-clickable">
        <span onClick={props.handleClick} className="form-Chip-label">
          {props.text}
        </span>
      </div>
    </div>
  );
}
