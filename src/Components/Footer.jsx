import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <footer
        className={
          isHomePage ? "homePage_footer otherPage_footer" : "otherPage_footer"
        }
      >
        <div className="container">
          <h4>LUXURY HOTELS</h4>
          <br />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, quas.
            Tempora, eius suscipit, magnam temporibus, ducimus ratione iste
            veniam rem molestias deleniti totam. Neque, voluptas necessitatibus.
            Suscipit, quibusdam libero adipisci accusantium dolorum enim
            inventore cum nulla nostrum ullam eligendi maxime eveniet nam,
            repellendus distinctio, obcaecati aliquid mollitia labore aliquam
            deserunt!
          </p>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/termsandcond"}>Terms And Conditions</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <h4>Connect With Us</h4>
          <br />
          <p>+0900 786 01</p>
          <p>oak@gmail.com</p>
          <p>All Rights Reserved By OAK</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
