import React from "react";
import "./about.css";
import ME from "../../assets/Me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>About me</h5>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>Nothing</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ullam odio temporibus
             iusto similique aliquid aut sequi amet eum saepe dicta qui, officia voluptas asperiores 
             ipsum quibusdam, inventore ut dolorum!
          </p>
          <a href="#contact" className="btn btn-primary"> Lets Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
