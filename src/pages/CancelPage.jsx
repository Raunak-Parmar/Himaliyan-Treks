import React from "react";
import "./styles/treks.css";

function CancelPage(props) {
  return (
    <div>
      <div className="trekHeader">
        <div className="layer">
          <h2>
            {props.title1}
            <span className="duo">{props.title2}</span>
            {props.title3}
          </h2>
        </div>
      </div>
      <ul style={{ padding: "50px 100px", fontSize: "23px" }}>
        <li>{props.point1}</li>
        <li>{props.point2}</li>
        <li>{props.point3}</li>
        <li>{props.point4}</li>
        <li>{props.point5}</li>
      </ul>
    </div>
  );
}

export default CancelPage;
