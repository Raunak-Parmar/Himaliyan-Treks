import React, { useEffect, useState } from "react";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/navbar.css";
import { Navbar, Nav, NavDropdown, Button, Col } from "react-bootstrap";
import Logo from "../Assets/logo.png";
import axios from "axios";
import {
  FaFacebookF,
  FaInstagram,
  FaTripadvisor,
  FaArrowDown,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function NavbarCompo() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [campdata, setCampData] = useState([]);

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

  async function getCampData() {
    try {
      const resp = await axios({
        method: "GET",
        url: "https://himalyan-explorations.herokuapp.com/api/campingList",
      });
      setCampData(resp.data);
    } catch (err) {
      console.log("Something went wrong");
      return [];
    }
  }
  console.log(data);
  useEffect(() => {
    getData();
    getCampData();
  }, []);

  const navigate = useNavigate();
  function treks() {
    navigate("/treks");
  }

  return (
    <>
      <div className="Desktop">
        <div className="topBar">
          <div className="topDetails">
            <span>
              <FontAwesomeIcon icon={faPhone} className="icon" />
              +91-9021779329
            </span>
            <span>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              info.thehimalayan@gmail.com
            </span>
          </div>
          <div>
            <a href="/cancellation" target="_blank">
              Cancellation Policy
            </a>
            <a href="/terms-conditions" target="_blank">
              Terms and Conditions
            </a>
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
        </div>
        <Navbar variant="danger" className="navBar">
          <div className="navContainer">
            <div style={{ width: "200px", marginRight: "10px" }}>
              <Navbar.Brand href="/" className="logoContainer">
                <img src={Logo} alt="logo" />
              </Navbar.Brand>
            </div>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/" className="navItem active">
                  Home
                </Nav.Link>
                <Nav.Link href="/about-us" className="navItem">
                  About Us
                </Nav.Link>

                <div class="dropdown">
                  <button class="dropbtn navItem" onClick={treks}>
                    Treks 
                  </button>
                  <div class="dropdown-content">
                    {data.map((item) => {
                      return (
                        <div className="drowndownContainer">
                          <Link
                            to={"/treks-" + `${item.title}`}
                            state={{ prop: item }}
                          >
                            <div style={{ display: "flex" }}>
                              <div className="dropdownImg">
                                <img src={item.img} className="img" />
                              </div>
                              <div
                                style={{ marginLeft: "10px" }}
                                className="dropDetails"
                              >
                                <p>{item.title}</p>
                                <span>{item.days} days</span>
                              </div>
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div class="dropdown">
                  <Link to="/camping">
                    <button class="dropbtn navItem">
                      Camping 
                    </button>
                  </Link>
                  <div class="dropdown-content">
                    {campdata.map((item) => {
                      return (
                        <div className="drowndownContainer">
                          <Link
                            to={"/treks-" + `${item.title}`}
                            state={{ prop: item }}
                          >
                            <div style={{ display: "flex" }}>
                              <div className="dropdownImg">
                                <img src={item.img} className="img" />
                              </div>
                              <div
                                style={{ marginLeft: "10px" }}
                                className="dropDetails"
                              >
                                <p>{item.title}</p>
                                <span>{item.days} days</span>
                              </div>
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <Nav.Link href="/blogs" className="navItem">
                  Blogs
                </Nav.Link>
                <Nav.Link href="/contact" className="navItem">
                  Contact Us
                </Nav.Link>
              </Nav>

              <Nav className="socials">
                {/* social media links if any */}
                <Nav.Link href="https://www.instagram.com/the_himalayan_exploration/">
                  <FaFacebookF className="socialIcon" />
                </Nav.Link>
                <Nav.Link href="https://www.instagram.com/the_himalayan_exploration/">
                  <FaInstagram className="socialIcon" />
                </Nav.Link>
                <Nav.Link href="https://www.tripadvisor.in/Profile/thehimalayanex">
                  <FaTripadvisor className="socialIcon" />
                </Nav.Link>
              </Nav>
              <a href="/contact">
                <Button className="bookBtn">
                  Book Now
                  <FontAwesomeIcon icon={faShoppingBag} className="icon" />
                </Button>
              </a>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
      <div className="MobNavbar">
        <span className="Mobnav-logo">
          <img
            src={Logo}
            alt="logo"
            style={{
              height: "70px",
              width: "170px",
              marginRight: "5px",
              marginTop: "4px",
            }}
          />
        </span>
        <div className={`Mobnav-items ${isOpen && "open"}`}>
          <a href="/">Home</a>
          <a href="/about-us">About Us</a>
          <a href="/treks">Treks</a>
          <a href="/blogs">Blogs</a>
          <a href="/contact">Contact Us</a>
        </div>
        <div
          className={`Mobnav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
    </>
  );
}

export default NavbarCompo;
