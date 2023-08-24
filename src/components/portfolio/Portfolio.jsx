import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/project01.PNG";

const data =[
  {
    id:1,
    title:"RecordBook POS System(Mobile)",
    img:IMG1,
    github:"https://github.com/MAD-arkSide/Recordbook_POS",
    behance:"",
  },
  {
    id:2,
    title:"Project 02",
    img:IMG1,
    github:"",
    behance:"",
  },
  {
    id:3,
    title:"Project 04",
    img:IMG1,
    github:"",
    behance:"",
  },
  {
    id:4,
    title:"Project 04",
    img:IMG1,
    github:"",
    behance:"",
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      {
        data.map(({id, title, img, github, behance}) => {
          return (
            <article key={id} className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={img} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cla">
            <a
              href={github}
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href={behance}
              className="btn btn-primary"
              target="_blank"
            >
              Demo
            </a>
          </div>
        </article>
        )

          })
        } 
      
        
      </div>
    </section>
  );
};

export default Portfolio;
