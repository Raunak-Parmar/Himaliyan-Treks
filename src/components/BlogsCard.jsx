import { Card, Col } from "react-bootstrap";
import "./styles/blogsCard.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BlogsCard(props) {
  const [data, setData] = useState([]);
  async function getData() {
    try {
      const resp = await axios({
        method: "GET",
        url: "https://himalyan-explorations.herokuapp.com/api/blogList",
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

  const rows = [...Array(Math.ceil(data.length / 3))];
  const productRows = rows.map((row, idx) => data.slice(idx * 3, idx * 3 + 3));

  console.log(productRows);
  var items = data.map((item) => item);
  var sliceitem = items.slice(0, 3);
  console.log(sliceitem);

  return props.item === "true" ? (
    <div className="blogContainer">
      {sliceitem.map((item) => {
        return (
          <Col md="4" className="mb-3 mt-3 ">
            <Card className="blogCard">
              <Card.Body className="blogCardBody">
                <Link to={item.title} state={{ prop: item }}>
                  <img src={item.banner} alt="banner" />
                </Link>
                <h3>{item.title}</h3>
                <Link to={item.title} state={{ prop: item }}>
                  <button>Read More</button>
                </Link>
                <span className="muted-text">{item.date}</span>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </div>
  ) : (
    productRows.map((row, idx) => (
      <div className="row" key={idx}>
        {row.map((item) => {
          return (
            <Col md="4" key={idx} className="mb-3 mt-3 ">
              <Card className="blogCard">
                <Card.Body className="blogCardBody">
                  <Link to={item.title} state={{ prop: item }}>
                    <img src={item.banner} alt="banner" />
                  </Link>
                  <h3>{item.title}</h3>
                  <Link to={item.title} state={{ prop: item }}>
                    <button>Read More</button>
                  </Link>
                  <span className="muted-text">{item.date}</span>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </div>
    ))
  );
}

export default BlogsCard;
