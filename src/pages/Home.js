import React, { useState,useRef  } from "react";
// import { Link } from 'react-router-dom';
import Button from "../components/common/Button.js";
import * as Icons from "react-icons/tb";
import { featuresData, faqData } from "../api/api.js";
import TextTypingAnimation from "../components/common/TextTypingAnimation.js";
import Faq from "../components/common/Faq.js";
import Input from "../components/common/Input.js";
import FeedbackSvg from '../components/common/FeedbackSvg.js'
import emailjs from '@emailjs/browser';

const Home = () => {
  // send mail from share pad
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('Share_pad_123', 'sharepad_id', form.current, 'MpeshvB7Dr0bp8E9S')
      .then((result) => {
          alert(result.text);
          
      setName("")
      setEmail("")
      setFeedback("")
      }, (error) => {
          alert(error.text);
      });
  };

  // on any button click function
  const handleButtonClick = () => {
    console.log(`Button clicked!`);
  };
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleQuestionClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Collapse the answer if clicked again
    } else {
      setExpandedIndex(index); // Expand the answer if a different question is clicked
    }
  };
  const textToType =
    "Sure. here'S O to the the 'Effortless Dynamic Link Oa•.eratiorr Every File with a unique Identity' Chir cutting-edge cord introduces a revolutionary Dyrvnic Link feature thcr takes filo monogement to now heights. With this to i$ CAJtomOtiCOty to file — system does it an for you! Exc:etiertce the cmvenience Of files with clients. or Each file's unique identity ens•.res secve access and en txmces while simplitving your workflmv. Our Dynorr•åc Link odopts to yout neode dynamically creating Enks thot stay up-to-defle soarr'essty when fan ore qxsated or Whether you're an individual user or o business.";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any action with the feedback data (e.g., send it to the server)
    console.log("Feedback submitted:", { name, email, feedback });
    // Clear the form after submission
    setName("");
    setEmail("");
    setFeedback("");
  };
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero_main">
            <div className="hero_content">
              <h1 className="hero_heading">
                Share, Collaborate, and Inspire with the Magic of Text
              </h1>
              <p className="hero_pera">
                Text Sharing Platform enables creative sharing, collaboration,
                and inspiration through words, connecting like-minded
                individuals, and making a lasting impact.
              </p>
              <Button
                text="Add File"
                icon={<Icons.TbPlus />}
                onClick={handleButtonClick}
                className="hero_btn"
              />
            </div>
            <div className="hero_img">
              <div className="macbook">
                <div className="macbook_head">
                  <div className="mac_navigators">
                    <div className="mac_navigator red"></div>
                    <div className="mac_navigator yellow"></div>
                    <div className="mac_navigator green"></div>
                  </div>
                  <div className="mac_search">
                    <div className="mac_loack">
                      <Icons.TbLock />
                    </div>
                    <div className="mac_link">www.sharepad.io</div>
                    <div className="mac_load">
                      <Icons.TbReload />
                    </div>
                  </div>
                </div>
                <div className="mac_screen_body">
                  <div className="macbook_text_board">
                    <h4>untitled</h4>
                    <TextTypingAnimation
                      text={textToType}
                      typingSpeed={40}
                      delay={2000}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="container">
          <h2 className="heading">
            Comprehensive Range of Cutting-Edge Features
          </h2>
          <div className="features_main">
            {featuresData.map((feature, index) => (
              <div className="feature_card" key={index}>
                <h4 className="feature_card_heading">{feature.heading}</h4>
                <p className="feature_card_pera">{feature.para}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="faq bg">
        <div className="container">
          <div className="faq_main">
            <div className="faq_content">
              <h2 className="heading">Frequently Asked Questions</h2>
              <p className="heading_pera">
                Below are some of the most commonly asked questions and their
                answers for your reference. If you have any queries or concerns
                not covered here, feel free to reach out to us for assistance.
              </p>
              <Faq />
            </div>
            <div className="faq_questions">
              {faqData.map((faq, index) => (
                <div className="question" key={index}>
                  <div
                    className="question_head"
                    onClick={() => handleQuestionClick(index)}
                  >
                    <h4>{faq.question}</h4>
                    <Icons.TbPlus />
                  </div>
                  <div
                    className={`question_body ${
                      expandedIndex === index ? "show" : ""
                    }`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="feedback">
        <div className="container">
          <h2 className="heading">Feedback for new features</h2>
          <div className="feedback_main">
            <form onSubmit={handleSubmit} className="feed_form" ref={form} onSubmit={sendEmail}>
              <div className="flex">
              	<Input
                  type="text"
                  label="Name:"
                  name="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={handleNameChange}
                  required
              />
              <Input
                type="email"
                label="Email:"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              </div>
              <div className="input-wrapper">
                <label htmlFor="feedback">Feedback:</label>
                <textarea
                  id="feedback"
                  placeholder="Leave your feedback here"
                  name="message"
                  value={feedback}
                  onChange={handleFeedbackChange}
                  required
                />
              </div>
              <Button text="Submit" />
            </form>
          <FeedbackSvg/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
