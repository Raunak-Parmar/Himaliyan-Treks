import React from "react";
import ContactCard from "../components/ContactCard";
import BookNow from "../components/Forms/BookNow";
import "./styles/treks.css";


function Contact() {
  return (
    <div>
      <div className="trekHeader">
        <div className="layer">
          <h2>
            Feel Free To <span className="duo">Contact Us!</span>
          </h2>
        </div>
      </div>
      <section className="BooknMap">
        <div className="BOOKCARD">
          <ContactCard />
          <BookNow />
        </div>
      </section>
    </div>
  );
}

export default Contact;
