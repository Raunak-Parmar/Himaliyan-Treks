import React from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import MarkdownView from "react-showdown";
import BlogsCard from "../components/BlogsCard";
import "./styles/blogPage.css";

function BlogPage() {
  const dataValue = useLocation().state.prop;
  console.log(dataValue);

  return (
    <>
      <div className="blogPage">
        <div className="blogImg">
          <img
            src={dataValue.banner}
            alt="blog image"
          />
        </div>
        <div className="title">
          <h2>
            {dataValue.title} <br />
            {/* <span className="duo">Mandatory in Uttarakhand</span> */}
          </h2>
        </div>
        <div className="paragraph">
          <p>
            <MarkdownView markdown={dataValue.desp} />
            {/* The Uttarakhand government made it mandatory for people arriving
            from a dozen states to provide negative RT-PCR test reports not
            older than 72 hours on arrival, citing an increase in COVID-19
            cases. From April 1, those traveling by road, air, or train from
            Maharashtra, Kerala, Punjab, Karnataka, Chhattisgarh, Madhya
            Pradesh, Tamil Nadu, Gujarat, Haryana, Uttar Pradesh, Delhi, and
            Rajasthan will be subject to the limitation, according to Chief
            Secretary Om Prakash. The advisory claimed that people coming from
            these states, including those living in Uttarakhand, must strictly
            adhere to the protection and social distancing norms set out by the
            Home Affairs and Health Ministries, as well as the state government.
            According to the statement, violations will be prosecuted under the
            Disaster Management Act of 2005, the Epidemics Act of 1897, and
            related provisions of the Indian Penal Code. The advisory stated
            that if any inbound individual is found to be positive for COVID-19,
            the current standard operating protocol for further treatment must
            be pursued. It noted, however, that inter-state and intra-state
            movement of vital services and commodities will be unregulated.
            Contact Himalayan Dreamtreks for more updates and your visit-related
            queries. Write Your Comments Leave a Reply Comment Your comment
            here... Enter your name or username to comment Name (required) Enter
            your email address to comment Email (required) Enter your website
            URL (optional) Website Save my name, email, and website in this
            browser for the next time I comment. Recent Blogs Covid-19 Report is
            Mandatory in Uttarakhand Read More April 9, 2021 Complete Guide of
            Kedarkantha Trekking Read More February 21, 2021 Himalayan
            Dreamtreks is a mission-driven outdoor adventure company. The aim is
            to make destinations that aren’t always found on standard maps
            available to people who enjoy visiting new locations. Important
            Links Sahastra Tal Trek Kedartal Trek Kedarkantha Trek Bali Pass
            Trek Dayara Bugyal Trek Kuari Pass TreK Contact Detail Phone No.
            +91-8089693825 +91-6395932971 Email info@himalayandreamtreks.in
            Office Address Address I Adarsh Cyber Cafe, near Nagar Palika
            Office, Chinyalisour, Uttarakhand 249196 © All rights reserved 2021
            @ Himalayan Dreamtreks Designed By Yourdigishell */}
          </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <div className="discountedtreksSection">
            <span className="duo">Recent </span>
            <span className="duo1">Blogs</span>
          </div>
          {/* display 3 blogs only by slice method */}
          <BlogsCard item="true" />
          <a href="/blogs">
            <Button className="treksBtn">View More</Button>
          </a>
        </div>
      </div>
    </>
  );
}

export default BlogPage;
