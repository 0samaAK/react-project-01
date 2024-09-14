import React from "react";
import { villas } from "../villas";
import { Link } from "react-router-dom";
import { RxDot } from "react-icons/rx";
import { IoIosPeople } from "react-icons/io";
import { BiArea } from "react-icons/bi";
import { FaBed, FaBath } from "react-icons/fa";

const Villas = () => {
  return (
    <>
      <section className="page" id="allVillas">
        <h1>ALL VILLAS</h1>
        <br />
        <p> {villas.length} Properities</p>
        <br />
        <div className="villasContainer">
          {villas.map((element) => {
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

export default Villas;
