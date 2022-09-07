import "./styles/trekcards.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

function TrekCards(props) {
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

  const rows = [...Array(Math.ceil(data.length / 4))];
  const productRows = rows.map((row, idx) => data.slice(idx * 4, idx * 4 + 4));

  console.log(productRows);
  var items = data.map((item) => item);
  var sliceitem = items.slice(0, 4);
  console.log(sliceitem);

  return props.item === "true" ? (
    <div className="treks">
      {sliceitem.map((item) => {
        return (
          <div className="trekCard">
            <Link to={"/treks-" + `${item.title}`} state={{ prop: item }}>
              <img src={item.img} />
            </Link>
            <div className="topLeft">
              <span>{item.days} </span>
              <span>Days</span>
            </div>
            <div className="topRight">
              <span>Rs. </span>
              <span>{item.price}</span>
            </div>
            <div className="bottom">
              <Link to={"/treks-" + `${item.title}`} state={{ prop: item }}>
                <button className="trekName">{item.title}</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    productRows.map((row, idx) => (
      <div className="row" key={idx}>
        {row.map((item) => {
          return (
            <Col md="3" key={idx} className="mb-3 mt-3 ">
              <div className="trekCard">
                <Link to={"/treks-" + `${item.title}`} state={{ prop: item }}>
                  <img src={item.img} />
                </Link>
                <div className="topLeft">
                  <span>{item.days} </span>
                  <span>Days</span>
                </div>
                <div className="topRight">
                  <span>Rs. </span>
                  <span>{item.price}</span>
                </div>
                <div className="bottom">
                  <Link to={"/treks-" + `${item.title}`} state={{ prop: item }}>
                    <button className="trekName">{item.title}</button>
                  </Link>
                </div>
              </div>
            </Col>
          );
        })}
      </div>
    ))
  );
}

export default TrekCards;
