import React from "react";
import "./styles/about.css";
import AboutHeaderImg from "../Assets/about.jpeg";
import Explore from "../Assets/Explore.jpeg";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHiking } from "@fortawesome/free-solid-svg-icons";
import Img1 from "../Assets/DSC_0389 (1).jpg";
import Img2 from "../Assets/DSCN9145.JPG";
import Img3 from "../Assets/IMG-20210223-WA0023.jpg";
import Img4 from "../Assets/IMG-20210720-WA0000.jpg";
import Img5 from "../Assets/kedarkantha.jpg";
import Founder from "../Assets/founder.jpeg";
import { Nav } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaTripadvisor,
} from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="AboutHeader">
        <img src={AboutHeaderImg}></img>
      </div>
      <div className="AbtUsContainer">
        <div className="AbtUS">
          <h3>About Us</h3>
          <h2>
            We are 100%
            <br />
            entire concentration <br />{" "}
            <span className="trekspan">
              on the trekking and Camping experience.
            </span>
          </h2>
          <p>
            Welcome to The Himalayan Exploration! We offer topflight
            hill-walking holidays across you. Many traveling companies focus on
            multitudinous sports; we are 100% entire concentration on the
            trekking experience. With unique guides, unbelievable support staff,
            and award-winning routeways, we are dedicated about giving memorable
            trekking experiences for guests all over the world!
          </p>
        </div>
        <div className="ExploreImg">
          <img src={Explore} />
        </div>
      </div>
      <div className="WhyUs">
        <h2>
          Why <span>Choose</span> Us{" "}
        </h2>
        <section className="cards">
          <Card className="CardSec">
            <div className="icons">
              <FontAwesomeIcon icon={faHiking} className="icon" />
            </div>
            <Card.Body>
              <Card.Title className="title">Heartbeat</Card.Title>
              <span className="purpose">
                Our core values of "Protection of the Earth and the People"
                promote all that we do. If you continue with us you make a small
                contribution to the "Trek for a Cause" program that helps people
                and the environment in remote areas.
              </span>
            </Card.Body>
          </Card>
          <Card className="CardSec">
            <div className="icons">
              <FontAwesomeIcon icon={faHiking} className="icon" />
            </div>
            <Card.Body>
              <Card.Title className="title">Finest Guides</Card.Title>
              <span className="purpose">
                You can expect excellent information from our independent
                leaders, travel experts and trainers, guides and local support
                team.
              </span>
            </Card.Body>
          </Card>
          <Card className="CardSec">
            <div className="icons">
              <FontAwesomeIcon icon={faHiking} className="icon" />
            </div>
            <Card.Body>
              <Card.Title className="title">
                Eco-friendly & Paperless
              </Card.Title>
              <span className="purpose">
                We have absolutely no paperwork, you don’t need to print
                anything; everything will be done online. All of our adventure
                activities are eco-friendly and we have always tried not to be
                plastic as part of our sustainable tourism path.
              </span>
            </Card.Body>
          </Card>
        </section>

        <div className="Moments">
          <h2>
            Memorable <span style={{ color: "#DA0037" }}>Moments</span>
          </h2>
          <section className="ImgGallery">
            <div className="images">
              <img src={Img1} style={{ width: "20vw", height: "50vh" }} />
            </div>
            <div className="images">
              <img src={Img2} style={{ width: "20vw", height: "50vh" }} />
            </div>
            <div className="images">
              <img src={Img3} style={{ width: "20vw", height: "50vh" }} />
            </div>
            <div className="images">
              <img src={Img4} style={{ width: "20vw", height: "50vh" }} />
            </div>
            <div className="images">
              <img src={Img5} style={{ width: "20vw", height: "50vh" }} />
            </div>
          </section>
        </div>
      </div>
      <div className="FounderCards">
        <div className="FounderImg">
          <img src={Founder} />
        </div>
        <div className="FounderInfo">
          <p>Founder</p> 
        
              <h2>Vijay Singh</h2>
          <p>
            Our founder Mr. Vijay Singh is an outdoor enthusiast & wanderlust
            nature person. Continuously working hard for the growth of The
            Himalayan Exploration. He had dreamed of showing people the beauty
            of the Himalayas. That's why after graduation, he learned about the
            mountains & how to climb them. He had complete both Basic & Advanced
            mountaineering course from Nehru Institute Of Mountaineering
          </p>
          <Nav className="socialsfounder">
                {/* social media links if any */}
                <Nav.Link href="https://www.facebook.com/vicky.lodhiyal.5">
                  <FaFacebookF className="socialIcon" />
                </Nav.Link>
                <Nav.Link href="https://www.instagram.com/invites/contact/?i=1mdc340mxr8ms&utm_content=1eywxrg">
                  <FaInstagram className="socialIcon" />
                </Nav.Link>
              </Nav>
        </div>
      </div>
      {/* <div className="ChefCards">
        <div className="ChefImg">
          <img src="https://himalayandreamtreks.in/wp-content/uploads/elementor/thumbs/IMG-20210301-WA0013-min-1-1-pdteyd0v7vqcy1vrfq0dcuk0q6e2umzztj2omk858o.jpg" />
        </div>
        <div className="ChefInfo">
          <p>Chef</p> <h2>VIRENDRA RANA</h2>{" "}
          <p>
            A native of Uttarkashi, Uttarakhand, Virendra Rana is a small town{" "}
            men with a big city attitude. Our chef Virendra Rana is a talented &
            experienced chef. He had exp. of more than 10+ years in cooking.
            Already worked for many hotels & reputed trekking agency. He is well
            qualified in making all types of cuisine.{" "}
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default AboutUs;
