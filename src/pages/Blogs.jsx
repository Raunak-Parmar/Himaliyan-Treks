import React from "react";
import BlogsCard from "../components/BlogsCard";
import "./styles/treks.css";
function Blogs() {
  return (
    <div>
      <div className="trekHeader">
        <div className="layer">
          <h2>
            Our
            <span className="duo">Recent</span>
            Blogs
          </h2>
        </div>
      </div>
      <BlogsCard />
    </div>
  );
}

export default Blogs;
