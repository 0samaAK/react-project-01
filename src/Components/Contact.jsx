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
      <section id="contact">
        <h1>CONTACT US</h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          beatae necessitatibus repellendus saepe illo aperiam? Eos hic soluta
          eveniet quam dolore recusandae quaerat minus nesciunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          odit rem veniam, fugit officia quo sunt quaerat, iusto numquam, dolor
          atque reprehenderit magnam! Repellat at doloribus exercitationem magni
          magnam vitae ratione vero, quam sapiente, nisi fuga eius, vel officia
          corporis hic. Incidunt ratione vel laboriosam similique repudiandae
          sunt corporis iste ipsam illum officiis deserunt maxime qui obcaecati,
          accusantium distinctio aliquam nam asperiores, voluptates nesciunt?
          Sapiente necessitatibus numquam commodi eos repudiandae quo, doloribus
          quisquam assumenda cupiditate nulla, fugit deleniti et expedita nam
          vel maiores rerum facere, id velit eius laborum sit illo! Porro,
          maxime! Cum aut optio dignissimos illum consequatur voluptatibus?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta tempore
          eos voluptatibus? Omnis cum quisquam esse adipisci tempore consequatur
          perferendis vitae. Ipsam sed perspiciatis reiciendis, ipsa facilis
          nemo doloremque quaerat placeat ducimus dolore minus, officia facere
          nesciunt quos saepe amet delectus eius explicabo reprehenderit dicta.
          Cum asperiores neque id vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores aut
          illum explicabo totam dolores, quis unde natus molestias repellendus
          harum mollitia nesciunt quidem et possimus id, sit sunt, reprehenderit
          doloremque ab. Ullam eligendi officia expedita provident. Officiis
          dolores inventore, nostrum ullam cum, soluta, repellendus nulla quasi
          ducimus eius natus qui corporis officia eligendi. Eum veniam tempora
          placeat excepturi vel, quas in voluptas sint repudiandae. Assumenda
          corporis quo non, sint fugit ex alias in repellat voluptatem!
        </p>
        <div className="container">
          <img src="/about.jpg" alt="about" />
          <div className="content">
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
        </div>
      </section>
    </>
  );
};

export default Contact;
