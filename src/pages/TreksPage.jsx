import React, { useState } from "react";
import "./styles/trkspge.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MarkdownView from "react-showdown";
import Collapsible from "react-collapsible";
import { Button, Card, Form, Nav, NavLink } from "react-bootstrap";
import {
  faLocation,
  faCampground,
  faBuilding,
  faCalendarDay,
  faArrowRight,
  faSquarePhoneFlip,
  faMapMarked,
  faCheck,
  faTimes,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Item from "antd/lib/list/Item";

function TreksPage(props) {
  const dataValue = useLocation().state.prop;
  console.log(dataValue);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    no_of_people: "",
    message: "",
  });

  const handleFormData = (input) => (e) => {
    // input value from the form
    const { value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
    console.log(value);
    console.log(formData);
  };

  async function postData() {
    try {
      const res = await axios({
        method: "POST",
        url: "https://himalyan-explorations.herokuapp.com/api/bookNow",
        data: formData,
      });
      console.log(res);
      alert("Form submitted successfully");
    } catch (err) {
      alert("Opps something went wrong");
      return [];
    }
  }
  return (
    <div>
      <div className="TrkHeader">
        <img src={dataValue.img} alt="Banner image"></img>
        <div className="headings">
          <h2 className="headerH2">{dataValue.title}</h2>
          <h3 className="headerH3">{dataValue.img_desp}</h3>
        </div>
        <section className="trekDets">
            <div style={{ display: "flex" }}>
            <FontAwesomeIcon className="icon" icon={faLocation} />
            <p className="trekHeadDetails">Region-{dataValue.location}</p>
            </div>
            <div style={{ display: "flex" }}>
            <FontAwesomeIcon className="icon" icon={faCampground} />
            <p className="trekHeadDetails">Base Camp-{dataValue.camp_location}</p>
            </div>
            <div style={{ display: "flex" }}>
            <FontAwesomeIcon className="icon" icon={faCalendarDay} />
            <p className="trekHeadDetails">Days - {dataValue.days}</p>
            </div>
            <div style={{ display: "flex" }}>
            <FontAwesomeIcon className="icon" icon={faBuilding} />
            <p className="trekHeadDetails">Metre - {dataValue.height}</p>
            </div>
        </section>
      </div>
      <section className="Panel">
        <div className="LeftPane">
          <h1 id="briefDescription">
            Brief <span className="duo">Description</span>
          </h1>
          <p>
            <MarkdownView markdown={dataValue.desp} />
          </p>
          <h1>
            Itinerary <span className="duo">Description</span>
          </h1>
          <p>
            <MarkdownView markdown={dataValue.iternery} />
            <br />
            {/* <strong>{dataValue.iternery_day2}</strong> <br />
            <strong>{dataValue.iternery_day3}</strong> <br />
            <strong>{dataValue.iternery_day4}</strong> <br />
            <strong>{dataValue.iternery_day5}</strong> <br /> */}
          </p>
          {/* <h1>
            Detail <span className="duo">Itinerary</span>
          </h1>
          <div>
            <p>
              <span
                style={{
                  fontWeight: "bold",
                  color: "#3254ce",
                  fontSize: "18px",
                }}
              >
                <FontAwesomeIcon
                  icon={faMapMarked}
                  style={{ color: "#FF6060", fontSize: "24px" }}
                />{" "}
                {dataValue.iternery_day1}{" "}
              </span>
              <br />
              <span>{dataValue.iternery_day1_desp}</span>
            </p>
            <p>
              <span
                style={{
                  fontWeight: "bold",
                  color: "#3254ce",
                  fontSize: "18px",
                }}
              >
                <FontAwesomeIcon
                  icon={faMapMarked}
                  style={{ color: "#FF6060", fontSize: "24px" }}
                />{" "}
                {dataValue.iternery_day2} <br />
              </span>
              <span>{dataValue.iternery_day2_desp}</span>
            </p>
            <p>
              <span
                style={{
                  fontWeight: "bold",
                  color: "#3254ce",
                  fontSize: "18px",
                }}
              >
                <FontAwesomeIcon
                  icon={faMapMarked}
                  style={{ color: "#FF6060", fontSize: "24px" }}
                />{" "}
                {dataValue.iternery_day3}{" "}
              </span>{" "}
              <br />
              <span>{dataValue.iternery_day3_desp}</span>
            </p>
            <p>
              <span
                style={{
                  fontWeight: "bold",
                  color: "#3254ce",
                  fontSize: "18px",
                }}
              >
                <FontAwesomeIcon
                  icon={faMapMarked}
                  style={{ color: "#FF6060", fontSize: "24px" }}
                />{" "}
                {dataValue.iternery_day4}{" "}
              </span>
              <br />
              <span>{dataValue.iternery_day4_desp}</span>
            </p>
            <p>
              <span
                style={{ fontWeight: "bold", color: "#3254ce", fontSize: "18" }}
              >
                <FontAwesomeIcon
                  icon={faMapMarked}
                  style={{ color: "#FF6060", fontSize: "24px" }}
                />{" "}
                {dataValue.iternery_day5}
              </span>{" "}
              <br />
              <span>{dataValue.iternery_day5_desp}</span>
            </p>
          </div> */}
          <h1 id="priceinclusion">Price Inclusion</h1>
          <p>
            <span>
              <FontAwesomeIcon
                icon={faCheck}
                style={{ marginRight: "5px", color: "#FF6060" }}
              />
              For the duration of your trek, you will be staying in hotels and
              camps from day one to day five.
            </span>{" "}
            <br />
            <span>
              <FontAwesomeIcon
                icon={faCheck}
                style={{ marginRight: "5px", color: "#FF6060" }}
              />
              Meals: From the first supper to the departure day morning, all
              meals are included. We offer easy, nutritious vegetarian food on
              all days of the trek.
            </span>
            <br />
            <span>
              <FontAwesomeIcon
                icon={faCheck}
                style={{ marginRight: "5px", color: "#FF6060" }}
              />
              Transportation: We will provide round-trip transportation from
              pickup point to drop point .
            </span>
            <br />
            <span>
              <FontAwesomeIcon
                icon={faCheck}
                style={{ marginRight: "5px", color: "#FF6060" }}
              />
              Camping fees: Both trekking permits and woodland camping fees are
              included in the price.
            </span>
            <br />
            <span>
              <FontAwesomeIcon
                icon={faCheck}
                style={{ marginRight: "5px", color: "#FF6060" }}
              />
              All of the camps will provide you with high-quality tents and
              sleeping bags for your trek. We have high-altitude sleeping bags
              that can withstand temperatures as low as -10°C. Ropes,
              microspikes, and gaiters are all available.
            </span>
            <br />
          </p>
          <h1 id="priceexclusion">Price Exclusion</h1>
          <p>
            <span>
              <FontAwesomeIcon
                icon={faTimes}
                style={{ marginRight: "5px", color: "#FF6060" }}
              />
              Expenses for personal reasons: For instance, during the trek,
              personal bags must be transported.
            </span>{" "}
            <br />
            <span>
              <FontAwesomeIcon
                icon={faTimes}
                style={{ marginRight: "5px", color: "#FF6060" }}
              />
              Emergency Costs: Any expense arises as a result of any kind of
              emergency.
            </span>{" "}
            <br />
            <span>
              <FontAwesomeIcon
                icon={faTimes}
                style={{ marginRight: "5px", color: "#FF6060" }}
              />
              Water in a Bottle: Throughout the trek, no bottled water will be
              provided.
            </span>{" "}
            <br />
          </p>
        </div>
        <div className="SidebarBook">
          <h1>
            {dataValue.price} INR
            <span style={{ fontSize: "18px", color: "crimson" }}>
              /per person
            </span>
          </h1>
          <p>5% GST EXTRA</p>
          <button className="BookNowBtn">
            Book Now <FontAwesomeIcon icon={faShoppingBag} />{" "}
          </button>
          <Card className="DescCards">
            <div className="icons"></div>
            <Card.Body>
              <Card.Title className="title"></Card.Title>
              <Card.Text className="purpose">
                <div
                  style={{
                    paddingBottom: "5px",
                    borderBottom: "1px solid #fff",
                    margin: "5px 0",
                  }}
                >
                  <FontAwesomeIcon
                    style={{ color: "crimson" }}
                    icon={faArrowRight}
                  />{" "}
                  <a href="">Brief Description</a> <br />
                </div>
                <div
                  style={{
                    paddingBottom: "5px",
                    borderBottom: "1px solid #fff",
                    margin: "5px 0",
                  }}
                >
                  <FontAwesomeIcon
                    style={{ color: "crimson" }}
                    icon={faArrowRight}
                  />{" "}
                  <a href="">Short Itinerary</a> <br />
                </div>
                <div
                  style={{
                    paddingBottom: "5px",
                    borderBottom: "1px solid #fff",
                    margin: "5px 0",
                  }}
                >
                  <FontAwesomeIcon
                    style={{ color: "crimson" }}
                    icon={faArrowRight}
                  />{" "}
                  <a href="">Detailed Itinerary</a> <br />
                </div>
                <div
                  style={{
                    paddingBottom: "5px",
                    borderBottom: "1px solid #fff",
                    margin: "5px 0",
                  }}
                >
                  <FontAwesomeIcon
                    style={{ color: "crimson" }}
                    icon={faArrowRight}
                  />{" "}
                  <a href="">Price Inclusion</a> <br />
                </div>
                <div
                  style={{
                    paddingBottom: "5px",
                    borderBottom: "1px solid #fff",
                    margin: "5px 0",
                  }}
                >
                  <FontAwesomeIcon
                    style={{ color: "crimson" }}
                    icon={faArrowRight}
                  />{" "}
                  <a href="">Price Exclusion</a> <br />
                </div>
                <div
                  style={{
                    paddingBottom: "5px",
                    borderBottom: "1px solid #fff",
                    margin: "5px 0",
                  }}
                >
                  <FontAwesomeIcon
                    style={{ color: "crimson" }}
                    icon={faArrowRight}
                  />{" "}
                  <a href="">Departure Date</a> <br />
                </div>
                <FontAwesomeIcon
                  style={{ color: "crimson" }}
                  icon={faArrowRight}
                />{" "}
                <a href="">Gallery</a> <br />
                <div className="socialsicons"></div>
              </Card.Text>
            </Card.Body>
          </Card>
          <h3 className="call">
            <button>
              <FontAwesomeIcon
                style={{ color: "red" }}
                icon={faSquarePhoneFlip}
              />{" "}
            </button>{" "}
            TALK TO AN EXPERT <br /> +91-9021779329{" "}
          </h3>{" "}
          <br />
          <div
            className="divOr"
            style={{
              color: "#fff",
              fontSize: "20px",
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            <span
              style={{
                backgroundColor: "#000",
                padding: "10px",
                borderRadius: "50%",
              }}
            >
              OR
            </span>
          </div>{" "}
          <br />
          <button
            className="BarsBook email"
            mailto="info.thehimalayan@gmail.com"
          >
            Email Us
          </button>{" "}
          <br />
          <button className="BarsBook">Departure Date</button>
          <Collapsible className="collapseBar" trigger="April 2021">
            <p>
              Call for booking-
              <br />
              +91 80896 93825 / +91 6395 932 971
            </p>
          </Collapsible>
          <Collapsible className="collapseBar" trigger="May 2021">
            <p>
              Call for booking-
              <br /> +91 80896 93825 / +91 6395 932 971
            </p>
          </Collapsible>
          <div className="BookNow">
            <Form>
              <h2 className="mt-4 mb-3" style={{ color: "#064663" }}>
                Booking<span className="duo">Form</span>
              </h2>
              <Form.Group className="mb-4">
                <Form.Control
                  placeholder="Name*"
                  className="inputs"
                  onChange={handleFormData("name")}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Control
                  placeholder="Email*"
                  type="email"
                  className="inputs"
                  onChange={handleFormData("email")}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Control
                  placeholder="Phone No*"
                  className="inputs"
                  onChange={handleFormData("mobile")}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control
                  placeholder="No of people*"
                  className="inputs"
                  onChange={handleFormData("no_of_people")}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control
                  placeholder="Message"
                  as="textarea"
                  rows={6}
                  className="inputs"
                  onChange={handleFormData("message")}
                />
              </Form.Group>
              <div style={{ textAlign: "center" }}>
                <Button className="formBtn" onClick={postData}>
                  Reserve Your Slot Now
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </section>
      <section className="TrekGallery">
        <h1 style={{ color: "#064663", fontSize: "30px" }} className="mb-4">
          Gallery
        </h1>
        <div className="GalleryImages">
          <img src={dataValue.gallery_img1} />
          <img src={dataValue.gallery_img2} />
          <img src={dataValue.gallery_img3} />
          <img src={dataValue.gallery_img4} />
          <img src={dataValue.gallery_img5} className="mobileGallery" />
          <img src={dataValue.gallery_img6} className="mobileGallery" />
        </div>
      </section>
    </div>
  );
}

export default TreksPage;
