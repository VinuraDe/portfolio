import React from "react";
import "./experience.css";
import {FaJava } from "react-icons/fa";
import {LiaReact} from "react-icons/lia"
import {AiFillHtml5} from "react-icons/ai"
import {BiSolidFileCss, BiLogoJavascript, BiLogoPhp, BiLogoCPlusPlus} from "react-icons/bi"
import {SiNextdotjs} from "react-icons/si"
import {SiMysql} from "react-icons/si"
import {IoLogoNodejs} from "react-icons/io"


const Experience = () => {
  return (
    <section id="experience">
      <h5> Skills</h5>
      <h2> My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <div>
                <AiFillHtml5 />
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <BiSolidFileCss />
                <h4>CSS</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <BiLogoJavascript />
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <LiaReact />
                <h4>ReactJs</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <SiNextdotjs />
                <h4>NextJs</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <div>
              <FaJava />
              <h4>Java</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
              <BiLogoPhp />
              <h4>PHP</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
              <SiMysql style={{ fontSize: '25px' }}/>
              <h4>MySQL</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
              <IoLogoNodejs/>
              <h4>NodeJs</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
              <BiLogoCPlusPlus/>
              <h4>C++</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
