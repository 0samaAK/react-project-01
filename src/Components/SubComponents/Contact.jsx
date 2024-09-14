import React from "react";
import { Link } from "react-router-dom";
import {
  RiFacebookBoxLine,
  RiInstagramLine,
  RiTwitterLine,
  RiYoutubeLine,
  RiSnapchatLine,
} from "react-icons/ri";

const Contact = () => {
  return (
    <>
      <section id="contact_Mini">
        <div className="super_container">
          <div className="container_1">
            <h3>Let's Connect</h3>
            <div>
              <p>Phone</p>
              <span>0900 786 01</span>
            </div>
            <div>
              <p>Email</p>
              <span>oak@gmail.com</span>
            </div>
            <div>
              <p>Address</p>
              <span>House No.942 SFC Block-2</span>
            </div>
            <ul>
              <Link to={"/"} target="_blank">
                <RiFacebookBoxLine />
              </Link>
              <Link to={"/"} target="_blank">
                <RiInstagramLine />
              </Link>
              <Link to={"/"} target="_blank">
                <RiTwitterLine />
              </Link>
              <Link to={"/"} target="_blank">
                <RiYoutubeLine />
              </Link>
              <Link to={"/"} target="_blank">
                <RiSnapchatLine />
              </Link>
            </ul>
          </div>
          <div className="container_2">
            <h3>We'd Love To Hear You</h3>
            <form>
              <div>
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Your Email" />
              </div>
              <textarea rows="4" placeholder="Your Message..."></textarea>
              <button type="submit">SEND</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
