import React, { useEffect, useState } from "react";
import TrekCards from "../components/TrekCards";
import "./styles/treks.css";

function Treks() {
  return (
    <div>
      <div className="trekHeader">
        <div className="layer">
          <h2>
            Our
            <span className="duo">Treks</span>{" "}
          </h2>
        </div>
      </div>
      <TrekCards />
    </div>
  );
}

export default Treks;
