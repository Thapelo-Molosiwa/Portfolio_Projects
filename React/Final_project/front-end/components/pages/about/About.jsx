import React, { useState } from 'react';
import '../about/about.css';

const About = () => {
  const [visibleSection, setVisibleSection] = useState('about-me');

  const handleButtonClick = (id) => {
    setVisibleSection(id);
    const element = document.getElementById(id);
    if (element) {
      const heading = element.querySelector('h2');
      if (heading) {
        heading.scrollIntoView({ behavior: 'smooth' });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="about">
      <div className="nav-buttons">
        <button onClick={() => handleButtonClick('about-me')}>About Me</button>
        <button onClick={() => handleButtonClick('education')}>Education</button>
        <button onClick={() => handleButtonClick('experience')}>Experience</button>
      </div>
      {visibleSection === 'about-me' && (
        <section id="about-me">
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius lacinia magna sed luctus. Proin sit amet ligula vel libero scelerisque ultricies. Nullam commodo nulla vel justo iaculis, ac consequat mauris vulputate. Vivamus nec tellus at ligula lacinia tincidunt.
          </p>
          <p>
            Fusce tincidunt, velit eu convallis ultrices, augue risus blandit libero, et feugiat tortor augue vel metus. Mauris consequat sodales magna nec finibus. Proin nec eros ac nulla aliquam suscipit id nec elit. Nam sed tempor odio. Nullam eget semper ligula.
          </p>
        </section>
      )}
      {visibleSection === 'education' && (
        <section id="education">
          <h2>Education</h2>
          <p>
            Donec hendrerit, mi sit amet tristique euismod, justo velit venenatis velit, at dapibus urna odio sit amet turpis. Nullam auctor, eros nec eleifend convallis, libero elit condimentum neque, sit amet fermentum lorem elit ut dolor. Suspendisse semper, dolor vel faucibus ullamcorper, libero velit dignissim nunc, at ultricies lorem velit nec odio. Cras nec varius lorem. Integer non consectetur velit, at pharetra est. In ac hendrerit sem.
          </p>
          <p>
            Suspendisse semper, dolor vel faucibus ullamcorper, libero velit dignissim nunc, at ultricies lorem velit nec odio. Cras nec varius lorem. Integer non consectetur velit, at pharetra est. In ac hendrerit sem.
          </p>
        </section>
      )}
      {visibleSection === 'experience' && (
        <section id="experience">
          <h2>Experience</h2>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc imperdiet, risus in consectetur eleifend, risus nisi scelerisque risus, eget varius libero erat a felis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius lacinia magna sed luctus. Proin sit amet ligula vel libero scelerisque ultricies. Nullam commodo nulla vel justo iaculis, ac consequat mauris vulputate. Vivamus nec tellus at ligula lacinia tincidunt. Fusce tincidunt, velit eu convallis ultrices, augue risus blandit libero, et feugiat tortor augue vel metus. Mauris consequat sodales magna nec finibus. Proin nec eros ac nulla aliquam suscipit id nec elit. Nam sed tempor odio. Nullam eget semper ligula. Donec hendrerit, mi sit amet tristique euismod, justo velit venenatis velit, at dapibus urna odio sit amet turpis. Nullam auctor, eros nec eleifend convallis, libero elit condimentum neque, sit amet fermentum lorem elit ut dolor. Suspendisse semper, dolor vel faucibus ullamcorper, libero velit dignissim nunc, at ultricies lorem velit nec odio. Cras nec varius lorem. Integer non consectetur velit, at pharetra est. In ac hendrerit sem.
          </p>
          <p>
            Aliquam lacinia nunc eget eros interdum consequat. Morbi pellentesque libero sed velit pretium, ac pellentesque ligula rutrum. Proin eu fermentum leo. Etiam vitae semper sapien. Cras hendrerit malesuada lacus, vel lacinia quam commodo in.
          </p>
        </section>
      )}
    </div>
  );
}

export default About;
