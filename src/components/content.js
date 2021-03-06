import React from 'react';
import Experience from './experience/experience';
import Projects from './projects/projects';

const Content = () => (
  <section className="section is-center has-background-grey-ter">
    <div className="container">
      <div className="columns is-centered has-text-centered">
        <h2 className="section-header montserrat-spaced" id="Experience">
          Experience
        </h2>
      </div>
      <Experience />
      <div className="columns is-centered has-text-centered">
        <h2 className="section-header montserrat-spaced" id="Project">
          Projects
        </h2>
      </div>
      <Projects />
    </div>
  </section>
);

export default Content;
