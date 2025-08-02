import React from "react";
import "./about.css";
import ME from "../../assets/Me_about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Education</h5>
              <small>IT Graduate</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Industry Experience</h5>
              <small>1+ Years</small>
            </article>
          </div>

          <p>
            I'm a passionate and driven IT graduate with a BSc (Hons) in
            Information Technology from SLIIT. My journey in tech has been one
            of continuous learning, hands-on building, and solving real-world
            problems. I’m especially drawn to full-stack development and
            IoT-based solutions that make a meaningful impact. With experience
            in modern frameworks like React, NestJS, I’ve worked on
            projects ranging from scalable web apps to environmental monitoring
            systems. I believe in writing clean, efficient code and building
            solutions that are both innovative and practical.
          </p>
          <a href="#contact" className="btn btn-primary">
            {" "}
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
