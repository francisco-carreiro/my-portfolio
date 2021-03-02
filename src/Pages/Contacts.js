/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import ContactItem from "../Components/ContactItem";
import phone from "../img/phone.svg";
import emailme from "../img/emailme.svg";
import location from "../img/location.svg";

function Contact() {
  return (
    <div className="ContactPage">
      <div className="map-sect">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d100940.04146718695!2d-25.49753166130967!3d37.757774016291634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-PT!2spt!4v1614699202910!5m2!1spt-PT!2spt"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          loading="lazy"
        ></iframe>
      </div>
      <div className="contact-sect">
        <ContactItem
          icon={phone}
          text1={"+351 924129477"}
          text2={"another numbah"}
          title={"Phone"}
        />
        <ContactItem
          icon={emailme}
          text1={"+351 924129477"}
          text2={"another numbah"}
          title={"Email"}
        />
        <ContactItem
          icon={location}
          text1={"+351 924129477"}
          text2={"another numbah"}
          title={"Address"}
        />
      </div>
    </div>
  );
}

export default Contact;
