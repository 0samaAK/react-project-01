import React from "react";
import { villas } from "../villas";
import { useParams } from "react-router-dom";

const Villa = () => {
  const { id } = useParams();
  const num = Number(id);
  const filterVilla = villas.filter((Villa) => Villa.id === num)[0];
  return (
    <>
      <section className="page" id="singleVilla">
        <div className="container">
          <br />
          <h3> {filterVilla.name} </h3>
          <br />
          <div className="images">
            <div className="villaImg">
              <img src={filterVilla.image} alt={filterVilla.name} />
            </div>
            <div className="otherImgs">
              <div>
                <img src="/landing.jpg" alt="landing" />
                <img src="/people.jpg" alt="people" />
              </div>
              <div>
                <img src="/people2.jpg" alt="people" />
                <img src="/villa10.jpg" alt="villa" />
              </div>
            </div>
          </div>
          <br />
          <h4> {filterVilla.location} </h4>
          <p>
            {filterVilla.bedrooms} Bedrooms / {filterVilla.bathrooms} Bathrooms
          </p>
          <br />
          <p>
            {filterVilla.guests} Guests / {filterVilla.squareMeter} Area
          </p>
          <br />
          <div className="checkin_out">
            <h5>
              Check In: <span>09:00 AM</span>
            </h5>
            <h5>
              Check Out: <span>03:00 AM</span>
            </h5>
          </div>
          <div className="location">
            <h4>LOCATION</h4>
            <b></b>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.5944155443667!2d67.12354627605013!3d25.01389403909968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb346ef1e65505b%3A0xb2b56296fea70ccc!2sMohsin%20Foods!5e0!3m2!1sen!2s!4v1703674502338!5m2!1sen!2s"
              style={{ width: "100%", height: "400px", border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Villa;
