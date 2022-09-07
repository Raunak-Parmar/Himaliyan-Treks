import {
  faEnvelope,
  faLocation,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./styles/contactCard.css";

function ContactCard() {
  return (
    <>
      <Card className="contactCard">
        <Row>
          <Col lg="4">
            <Card.Body>
              <div className="iconContainer">
                <FontAwesomeIcon icon={faLocation} className="icon" />
              </div>
              <span>
                Adarsh Cyber Cafe, near Nagar Palika Office, Chinyalisour,
                Uttarakhand 249196
              </span>
            </Card.Body>
          </Col>
          <Col lg="4">
            <Card.Body>
              <div className="iconContainer">
                <FontAwesomeIcon icon={faMessage} className="icon" />
              </div>
              <span>+91-8089693825 <br/>
              +91-6395932971</span>
            </Card.Body>
          </Col>
          <Col>
            <Card.Body>
              <div className="iconContainer">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
              </div>
              <span>info@himalayandreamtreks.in</span>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default ContactCard;
