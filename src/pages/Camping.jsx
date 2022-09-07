import React, { useEffect, useState } from "react";
import CampingCards from "../components/CampingCards";
import "./styles/treks.css";

function Camping() {
  return (
    <div>
      <div className="trekHeader">
        <div className="layer">
          <h2>
            Our
            <span className="duo">Camping</span>{" "}
          </h2>
        </div>
      </div>
      <CampingCards />
    </div>
  );
}

export default Camping;