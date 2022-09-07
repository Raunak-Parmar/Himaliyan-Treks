import React, { useEffect, useState } from "react";
import "./styles/disTreks.css";
import axios from "axios";
import { Link } from "react-router-dom";

function DiscountedTreks() {
  const [data, setData] = useState([]);
  async function getData() {
    try {
      const resp = await axios({
        method: "GET",
        url: "https://himalyan-explorations.herokuapp.com/api/discountList",
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

  var items = data.map((item) => item);
  var sliceitem = items.slice(0, 4);
  console.log(sliceitem);

  return (
    <div className="distreks">
      {sliceitem.map((item) => {
        return (
          <div className="distrekCard">
            <Link to={"/treks-" + `${item.title}`} state={{ prop: item }}>
              <img
                src={item.img}
              />
              <div>
                <button className="distrekName">View More </button>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default DiscountedTreks;
