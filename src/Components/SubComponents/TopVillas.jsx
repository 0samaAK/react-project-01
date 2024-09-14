import React from "react";
import { villas } from "../../villas";
import { Link } from "react-router-dom";
import { RxDot } from "react-icons/rx";
import { IoIosPeople } from "react-icons/io";
import { BiArea } from "react-icons/bi";
import { FaBed, FaBath } from "react-icons/fa";

const TopVillas = () => {
  return (
    <>
      <section id="topVillas">
        <br />
        <h1>TOP PICK VILLAS</h1>
        <br />
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          repellat maiores quidem ab reiciendis, assumenda soluta qui ex fuga
          suscipit? Eum ut magnam sunt. Aperiam repudiandae vel aut vero esse.
        </p>
        <br />
        <br />
        <div className="villasContainer">
          {villas.slice(0, 3).map((element) => {
            return (
              <Link
                className="card"
                to={`/villa/${element.id}`}
                key={element.id}
              >
                <img src={element.image} alt={element.name} />
                <br />
                <div className="location_text">
                  <span> {element.location} </span>
                  <span>
                    <RxDot />
                  </span>
                  <span> {element.category} </span>
                </div>
                <div className="title_text"> {element.name} </div>
                <div className="specifications">
                  <div className="spec">
                    <IoIosPeople />
                    <span> {element.guests} </span>
                    Guests
                  </div>
                  <div className="spec">
                    <FaBed />
                    <span> {element.bedrooms} </span>
                    Bedrooms
                  </div>
                  <div className="spec">
                    <BiArea />
                    <span> {element.squareMeter} </span>
                    Area
                  </div>
                  <div className="spec">
                    <FaBath />
                    <span> {element.bathrooms} </span>
                    Bathrooms
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default TopVillas;
