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
              <small>4th year Undergraduate</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Experience</h5>
              <small>2 Years of programming</small>
            </article>
          </div>

          <p>
            A passionate and driven third-year undergraduate student pursuing a
            degree in Information Technology. My journey in IT has been a
            thrilling adventure of learning, problem-solving, and innovation. I
            believe in the power of technology to transform lives and drive
            positive change. With a strong foundation in programming languages,
            web development, and database management, I've embarked on projects
            that challenge me to push the boundaries of what's possible.
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
