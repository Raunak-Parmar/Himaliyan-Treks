import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavbarCompo from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import BlogPage from "./pages/BlogPage";
import Blogs from "./pages/Blogs";
import CancelPage from "./pages/CancelPage";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Treks from "./pages/Treks";
import TreksPage from "./pages/TreksPage";
import Camping from "./pages/Camping";
import Privacy from "./pages/Privacy";
import ScrollToTop from "react-scroll-to-top";

import SvgComponent from "./components/Svgr"
// import { ReactComponent as SvgComponent } from "./Assets/arrow-up.svg";

function App() {
  return (
    <>
      <NavbarCompo />
      <ScrollToTop
        style={{
          position: "fixed",
          left: "15px",
          backgroundColor: "#0078AA ",
          zIndex: "100",
        }}
        smooth
        viewBox="0 0 24 24"
        // fill="#fff !important"
        component={<SvgComponent />}
      />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/treks" element={<Treks />} />
        <Route path="/camping" element={<Camping />} />
        <Route path="/camping:id" element={<Camping />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:id" element={<BlogPage />} />
        <Route path="/treks:type" element={<TreksPage />} />
        <Route
          path="/cancellation"
          element={
            <CancelPage
              title1="Our"
              title2="Cancellation"
              title3="Policy"
              point1="Before 30 days: 90% of the total Land Package Cost is refundable"
              point2="Between 21-30 days: 75% of the total Land Package Cost is refundable."
              point3=" Between 11-20 days: 50% of the total Land Package Cost is refundable."
              point4="Less than 10 days: No refund."
            />
          }
        />
        <Route
          path="/terms-conditions"
          element={
            <CancelPage
              title1="Terms &"
              title2="Conditions"
              point1="50% of payment to be made in advance at the time of booking the trek."
              point2="Last date of booking will be closed before7 days of prior."
              point3="Team THE has right to change the itinerary and schedule without any notice."
              point4="Payment to be made by case /bank transfer in favour of The Himalayan Exploration."
              point5="If treks get canceled for any reason then Payment for this trip will be adjusted against any further trips."
            />
          }
        />
        <Route path="/privacy-policy" element={<Privacy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
