/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import ContactItem from "../Components/ContactItem";
import Title from "../Components/Title";
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";

function Contacts() {
  return (
    <div>
      <div className="title">
        <Title title={"Contacts"} span={"Contacts"} />
      </div>
      <div className="ContactPage">
        <div className="contact-sect">
          <ContactItem icon={phone} text1={"+351 924129477"} title={"Phone"} />
          <ContactItem
            icon={email}
            text1={"franciscomcarreiro@hmail.com"}
            title={"Email"}
          />
          <ContactItem
            icon={location}
            text1={
              "If really needed ask me for my address for security reasons it wont be displayed."
            }
            title={"Address"}
          />
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
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
