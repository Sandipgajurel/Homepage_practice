import React from "react";
import "../Styles/footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="grid1">
        <div className="map">
          <img
            className="mapImg"
            src="https://i.pinimg.com/736x/3b/b5/6a/3bb56a7c0dd880b6ef228c673624304e.jpg"
            alt=""
          ></img>
        </div>

        <div className="item-container">
          <div className="items">
            <p className="head">Products</p>
            <p>Delta</p>
            <p>Sigma</p>
            <p>Zeta</p>
            <p>Alpha</p>
            <p>Acumen</p>
          </div>
          <div className="items">
            <p className="head">Resources</p>
            <p>Help</p>
            <p>Training Videos</p>
            <p>Webinars</p>
            <p>Request a Demo</p>
            <p>Quiz Maker</p>
          </div>
          <div className="items">
            <p className="head">Company</p>
            <p>About Us</p>
            <p>Careers</p>
            <p>Team</p>
            <p>Contact Us</p>
            <p>Acumen</p>
          </div>
        </div>
      </div>
      <hr
        style={{
          width: "85%",
        }}
      />

      <div className="grid2">
        <div className="column">
          <p>Copyright ©Sandip Gajurel All rights reserved.</p>
        </div>
        <div className="column">
          <img
            className="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq73Ty8mZJFJlCoTL0ds0oGXLBxx7v_QON_IbElJ-CTQ&s"
            alt=""
          />
          <img
            className="logo"
            src="https://thumbs.dreamstime.com/b/rounded-black-white-linkedin-logo-icon-high-resolution-vector-eps-file-175792458.jpg"
            alt=""
          />
        </div>

        <div className="column">
          Privacy Policy | Data & Security | Terms of Service
        </div>
      </div>
    </div>
  );
};

export default Footer;
