import React from "react";
import "./experience.css";
import {BsFiletypeJava } from "react-icons/bs";
import {FaReact} from "react-icons/fa"
import {AiFillHtml5} from "react-icons/ai"
import {BiSolidFileCss, BiLogoJavascript, BiLogoPhp} from "react-icons/bi"
import { Tb } from 'react-icons/Tb';

import {TbBrandNextjs} from "react-icons/Tb"
import {GrMysql} from "react-icons/gr"


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
                <FaReact />
                <h4>ReactJs</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <TbBrandNextjs />
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
              <BsFiletypeJava />
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
              <GrMysql />
              <h4>MySQL</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
