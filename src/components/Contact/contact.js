import React, { useRef, useState } from "react";
import "./contact.css";
import LinkIcon from "../../assets/linkedIn.png";
import InstagramIcon from "../../assets/instagram.png";
import GithubIcon from "../../assets/github.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a13x2ne",
        "template_y9774nw",
        form.current,
        "WPqqgcmiIQ9TCF8lv"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Your message has been sent!");
        },
        (error) => {
          console.log(error.text);
          setMessage("An error occurred. Please try again later.");
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form ref={form} className="contactForm" onSubmit={sendEmail}>
          <input
            required
            type="text"
            className="name"
            name="your_name"
            placeholder="Your Name"
            onInvalid={(e) =>
              e.target.setCustomValidity("Please enter your name.")
            }
            onChange={(e) => e.target.setCustomValidity("")}
          />
          <input
            required
            type="email"
            className="email"
            name="your_email"
            placeholder="Your Email"
            onInvalid={(e) =>
              e.target.setCustomValidity("Please enter your email.")
            }
            onChange={(e) => e.target.setCustomValidity("")}
          />
          <textarea
            required
            name="message"
            rows="5"
            placeholder="Your Message"
            className="msg"
            onInvalid={(e) =>
              e.target.setCustomValidity("Please enter your message.")
            }
            onChange={(e) => e.target.setCustomValidity("")}
          ></textarea>
          <button className="submitBtn" type="submit" value="Send">
            Submit
          </button>
          {message && <p className="successMessage">{message}</p>}
          <div className="links">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/alexander-roizmand/"
            >
              <img src={LinkIcon} alt="LinkedIn" className="link" />
            </a>
            <a href="https://www.instagram.com/wilderroizman/" target="_blank">
              <img src={InstagramIcon} alt="Instagram" className="link" />
            </a>
            <a href="https://github.com/aroizmand" target="_blank">
              <img src={GithubIcon} alt="Github" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
