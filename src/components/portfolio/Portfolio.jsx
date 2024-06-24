import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/project01.PNG";
import IMG2 from "../../assets/project02.png";
import IMG3 from "../../assets/project03.png";
import IMG4 from "../../assets/project04.png";
import IMG5 from "../../assets/project05.PNG";

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
    title:"Hotel Management(Web)",
    img:IMG2,
    github:"https://github.com/Laksara-007/ITP24_B4_W07",
    behance:"#",
  },
  {
    id:3,
    title:"Food Review Web Application",
    img:IMG3,
    github:"https://github.com/VinuraDe/Food-Review-Web-Application",
    behance:"",
  },
  {
    id:4,
    title:"Notes App",
    img:IMG4,
    github:"",
    behance:"https://notes-app-one-lac.vercel.app/",
  },
  {
    id:5,
    title:"Landing Page",
    img:IMG5,
    github:"",
    behance:"https://landingpage-vinura.netlify.app/",
  },
  
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
