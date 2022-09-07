import {
  faCampground,
  faMapMarkedAlt,
  faMoneyBill,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";
import "./styles/header.css";

function Header() {
  return (
    <>
      <div className="header">
        <h1 className="text">India's</h1> <br />
        <h1 className="text1">Trekking And Camping Expert</h1>
      </div>
      <div className="whyUs">
        <div>
          <span className="duo">Why </span>
          <span className="duo1">Us</span>
        </div>

        <div className="cards">
          <Row>
            <Col>
              <div className="whyusCard">
                <FontAwesomeIcon icon={faUsers} className="icon user" />
              </div>

              <h4>Experienced Team</h4>
            </Col>
            <Col>
              <div className="whyusCard">
                <FontAwesomeIcon icon={faCampground} className="icon" />
              </div>
              <h4>Quality Equipment</h4>
            </Col>
            <Col>
              <div className="whyusCard">
                <FontAwesomeIcon icon={faMapMarkedAlt} className="icon" />
              </div>
              <h4>Planned Itinerary</h4>
            </Col>
            <Col>
              <div className="whyusCard">
                <FontAwesomeIcon icon={faMoneyBill} className="icon" />
              </div>
              <h4>Affordable Rates</h4>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Header;
