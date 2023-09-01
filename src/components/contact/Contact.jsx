import React from "react";
import "./contact.css";
import {SiGmail} from "react-icons/si"
import {BsFacebook} from "react-icons/bs"
import {AiFillLinkedin} from "react-icons/ai"
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hjn7fdd', 'template_hbnlsit', form.current, 'AFrIPy6tRsuroiPkW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <SiGmail className="contact__option-icon"/>
            <h4>Gmail</h4>
            <h5>m.v.r.desilva@gmail.com</h5>
            <a href="mailto:m.v.r.desilva@gmail.com" target="_blank">
              Send a Email
            </a>

          </article>
          <article className="contact__option">
          <BsFacebook className="contact__option-icon"/>
            <h4>Facebook</h4>
            <h5>Vinura de Silva</h5>
            <a href="https://www.facebook.com/profile.php?id=100005683849457" target="_blank">
              View Profile
            </a>

          </article>
          <article className="contact__option">
          <AiFillLinkedin className="contact__option-icon"/>
            <h4>LinkedIn</h4>
            <h5>Vinura de Silva</h5>
            <a href="https://www.linkedin.com/in/vinura-de-silva/" target="_blank">
              View Profile
            </a>

          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Name" required/>
          <input type="email" name="email" placeholder="Email" required/>
          <textarea name="message" rows="7" placeholder="Message" required></textarea>
          <button type="sumbit" className="btn btn-primary">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact