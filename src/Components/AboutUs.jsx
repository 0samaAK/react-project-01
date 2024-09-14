import React from "react";
import About from "./SubComponents/About";

const AboutUs = () => {
  return (
    <>
      <section id="aboutPage" className="page">
        <div className="container">
          <img src="/about.jpg" alt="about" />
          <div className="content">
            <h3>Your Peace Of Mind, Our Priority</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda incidunt error aperiam ipsam perferendis, officiis,
              aliquam nostrum, omnis labore excepturi reprehenderit pariatur.
              Assumenda voluptatum facilis at voluptates dicta libero veniam!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda incidunt error aperiam ipsam perferendis, officiis,
              aliquam nostrum, omnis labore excepturi reprehenderit pariatur.
              Assumenda voluptatum facilis at voluptates dicta libero veniam!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda incidunt error aperiam ipsam perferendis, officiis,
              aliquam nostrum, omnis labore excepturi reprehenderit pariatur.
              Assumenda voluptatum facilis at voluptates dicta libero veniam!
            </p>
          </div>
        </div>
        <About />
      </section>
    </>
  );
};

export default AboutUs;
