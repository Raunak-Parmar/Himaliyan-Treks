import { React, useEffect, useState } from "react";
import "./styles/footer.css";
import { Card, Button, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faArrowRight,
  faMobileAndroid,
  faMailBulk,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link } from "react-router-dom";
import Logo from "../Assets/logo.png";
import { FaFacebookF, FaInstagram, FaTripadvisor } from "react-icons/fa";

function Footer() {
  var date = new Date();

  const [data, setData] = useState([]);
  async function getData() {
    try {
      const resp = await axios({
        method: "GET",
        url: "https://himalyan-explorations.herokuapp.com/api/treksList",
      });
      setData(resp.data);
    } catch (err) {
      console.log("Something went wrong");
      return [];
    }
  }
  console.log(data);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Footer">
      <section className="cards">
        <Card className="CardSec">
          <div className="icons"></div>
          <Card.Body>
            <Card.Title className="title">
              <img src={Logo} style={{ width: "200px", height: "92.8px" }}></img>
            </Card.Title>

            <Card.Text className="purpose">
              Welcome to The Himalayan Exploration! We offer topflight
              hill-walking holidays across you. Many traveling companies focus
              on multitudinous sports; we are 100% entire concentration on the
              trekking experience. With unique guides, unbelievable support
              staff, and award-winning routeways, we are dedicated about giving
              memorable trekking experiences for guests all over the world!
              <Nav className="socials footerSocials">
                {/* social media links if any */}
                <Nav.Link href="https://www.instagram.com/the_himalayan_exploration/" className="footerLink">
                  <FaFacebookF className="socialIcon" />
                </Nav.Link>
                <Nav.Link href="https://www.instagram.com/the_himalayan_exploration/" className="footerLink">
                  <FaInstagram className="socialIcon" />
                </Nav.Link>
                <Nav.Link href="https://www.tripadvisor.in/Profile/thehimalayanex" className="footerLink">
                  <FaTripadvisor className="socialIcon" />
                </Nav.Link>
              </Nav>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="CardSec">
          <div className="icons">
            <FontAwesomeIcon className="icon" />
          </div>
          <Card.Body>
            <Card.Title className="title">Important Links </Card.Title>
            <Card.Text className="purpose">
              {data.map((item) => {
                return (
                  <>
                    <Link
                      to={"/treks-" + `${item.title}`}
                      state={{ prop: item }}
                      style={{ textDecoration: "none" }}
                    >
                      <span>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>{" "}
                      {item.title}
                    </Link>
                    <br />
                  </>
                );
              })}{" "}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="CardSec">
          <div className="icons">
            <FontAwesomeIcon className="icon" />
          </div>
          <Card.Body>
            <Card.Title className="title">Contact Details</Card.Title>
            <Card.Text className="purpose">
              <h5>
                <span>
                  <FontAwesomeIcon
                    style={{ color: "#fff", marginRight: "8px" }}
                    icon={faMobileAndroid}
                  />
                </span>
                Phone No.
              </h5>
              <p>
                +91- 9021779329
                <br />
              </p>
              <h5>
                <span>
                  <FontAwesomeIcon
                    style={{ color: "#fff", marginRight: "8px"}}
                    icon={faMailBulk}
                  />
                </span>
                Email
              </h5>
              <p>info.thehimalayan@gmail.com</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="CardSec">
          <div className="icons">
            <FontAwesomeIcon className="icon" />
          </div>
          <Card.Body>
            <Card.Title className="title">Office Address</Card.Title>
            <Card.Text className="purpose">
              <h5>
                <span>
                  <FontAwesomeIcon
                    style={{ color: "#fff" }}
                    icon={faLocation}
                  />
                </span>
                Address
              </h5>
              <p>Kalawati Chauraha Nawabi Road Haldwani 263139</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </section>
      <div className="caption">
        <h4>
          ©All rights reserved {date.getFullYear()} @The Himalyan Explorations
        </h4>{" "}
        <a
          style={{ color: "#fff", textDecoration: "none" }}
          target="_blank"
          href="https://pracharmore.com/"
        >
          Designed and Developed By PracharMore
        </a>
      </div>
    </div>
  );
}

export default Footer;
