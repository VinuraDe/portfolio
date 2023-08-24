import React from "react";
import "./contact.css";
import {SiGmail} from "react-icons/si"
import {BsFacebook} from "react-icons/bs"
import {AiFillLinkedin} from "react-icons/ai"

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <SiGmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>m.v.r.desilva@gmail.com</h5>
            <a href="mailto:m.v.r.desilva@gmail.com">
              Send a message
            </a>

          </article>
          <article className="contact__option">
          <BsFacebook className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>Vinura de Silva</h5>
            <a href="facebook.com">
              Send a message
            </a>

          </article>
          <article className="contact__option">
          <AiFillLinkedin className="contact__option-icon"/>
            <h4>LinkedIn</h4>
            <h5>Vinura de Silva</h5>
            <a href="https://www.Linkedin.com">
              Send a message
            </a>

          </article>
        </div>
        <form action= "">
          <input type="text" placeholder="Name" required/>
          <input type="email" placeholder="Email" required/>
          <textarea name="message" rows7 placeholder="Message" required></textarea>
          <button type="sumbit" className="btn btn-primary">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact