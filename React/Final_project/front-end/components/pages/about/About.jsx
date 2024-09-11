import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../about/about.css";

const About = () => {
  const navigate = useNavigate();
  const [visibleSection, setVisibleSection] = useState("about-me");

  const handleButtonClick = (id) => {
    setVisibleSection(id);
    const element = document.getElementById(id);
    if (element) {
      const heading = element.querySelector("h2");
      if (heading) {
        heading.scrollIntoView({ behavior: "smooth" });
      } else {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="about">
      <button className="back-button" onClick={() => navigate("/")}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 19l-7-7 7-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="nav-buttons">
        <button onClick={() => handleButtonClick("about-me")}>About Me</button>
        <button onClick={() => handleButtonClick("education")}>
          Education
        </button>
        <button onClick={() => handleButtonClick("experience")}>
          Experience
        </button>
      </div>
      {visibleSection === "about-me" && (
        <section id="about-me">
          <div className="set">
            <h1>Hi I'm Thapelo Molosiwa,</h1>
            <h2>Front-End Developer</h2>
            <p className="elevator-pitch">
              Hi, I’m Thapelo, a junior software developer. I’m skilled in React
              and Angular, and I love turning ideas into practical,
              user-friendly applications. I’m always eager to learn and take on
              new challenges. My goal is to build solutions that are not only
              functional but also enjoyable to use. I’m excited to bring my
              passion and skills to new projects and help create great software.
            </p>
          </div>

          <div className="image-section">
            <img
              src="../components\images\WhatsApp Image 2024-07-30 at 9.52.10 AM.jpeg"
              alt="Description"
            />
          </div>
        </section>
      )}
      {visibleSection === "education" && (
        <section id="education">
          <h2>Education</h2>
          <p>
            Donec hendrerit, mi sit amet tristique euismod, justo velit
            venenatis velit, at dapibus urna odio sit amet turpis. Nullam
            auctor, eros nec eleifend convallis, libero elit condimentum neque,
            sit amet fermentum lorem elit ut dolor. Suspendisse semper, dolor
            vel faucibus ullamcorper, libero velit dignissim nunc, at ultricies
            lorem velit nec odio. Cras nec varius lorem. Integer non consectetur
            velit, at pharetra est. In ac hendrerit sem.
          </p>
          <p>
            Suspendisse semper, dolor vel faucibus ullamcorper, libero velit
            dignissim nunc, at ultricies lorem velit nec odio. Cras nec varius
            lorem. Integer non consectetur velit, at pharetra est. In ac
            hendrerit sem.
          </p>
        </section>
      )}
      {visibleSection === "experience" && (
        <section id="experience">
          <h2>Experience</h2>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Nunc imperdiet, risus
            in consectetur eleifend, risus nisi scelerisque risus, eget varius
            libero erat a felis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius
            lacinia magna sed luctus. Proin sit amet ligula vel libero
            scelerisque ultricies. Nullam commodo nulla vel justo iaculis, ac
            consequat mauris vulputate. Vivamus nec tellus at ligula lacinia
            tincidunt. Fusce tincidunt, velit eu convallis ultrices, augue risus
            blandit libero, et feugiat tortor augue vel metus. Mauris consequat
            sodales magna nec finibus. Proin nec eros ac nulla aliquam suscipit
            id nec elit. Nam sed tempor odio. Nullam eget semper ligula. Donec
            hendrerit, mi sit amet tristique euismod, justo velit venenatis
            velit, at dapibus urna odio sit amet turpis. Nullam auctor, eros nec
            eleifend convallis, libero elit condimentum neque, sit amet
            fermentum lorem elit ut dolor. Suspendisse semper, dolor vel
            faucibus ullamcorper, libero velit dignissim nunc, at ultricies
            lorem velit nec odio. Cras nec varius lorem. Integer non consectetur
            velit, at pharetra est. In ac hendrerit sem.
          </p>
          <p>
            Aliquam lacinia nunc eget eros interdum consequat. Morbi
            pellentesque libero sed velit pretium, ac pellentesque ligula
            rutrum. Proin eu fermentum leo. Etiam vitae semper sapien. Cras
            hendrerit malesuada lacus, vel lacinia quam commodo in.
          </p>
        </section>
      )}
    </div>
  );
};

export default About;
