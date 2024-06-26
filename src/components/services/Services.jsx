import React from "react";
import "./services.css";
import { BiSolidBadgeCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What we offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiSolidBadgeCheck className="service__list-icon" />
              <p>Cuztomized styles</p>
            </li>
            <li>
              <BiSolidBadgeCheck className="service__list-icon" />
              <p>High security</p>
            </li>
            <li>
              <BiSolidBadgeCheck className="service__list-icon" />
              <p>Fully optimized</p>
            </li>
            <li>
              <BiSolidBadgeCheck className="service__list-icon" />
              <p>Fully responsive</p>
            </li>
            <li>
              <BiSolidBadgeCheck className="service__list-icon" />
              <p>Maintenance</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Mobile App Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiSolidBadgeCheck className="service__list-icon" />
              <p>Android apps</p>
            </li>
            <li>
              <BiSolidBadgeCheck className="service__list-icon" />
              <p>Responsive Designs</p>
            </li>
            <li>
              <BiSolidBadgeCheck className="service__list-icon" />
              <p>High security</p>
            </li>
            <li>
              <BiSolidBadgeCheck className="service__list-icon" />
              <p>Maintenance</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiSolidBadgeCheck className="service__list-icon" />
              <p>Wireframing and Prototyping</p>
            </li>
            <li>
              <BiSolidBadgeCheck className="service__list-icon" />
              <p>Responsive Design</p>
            </li>
            <li>
              <BiSolidBadgeCheck className="service__list-icon" />
              <p>Futuristic designs</p>
            </li>
            <li>
              <BiSolidBadgeCheck className="service__list-icon" />
              <p>Research and Discovery</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
