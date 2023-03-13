import React, { useState } from 'react';
import './Skills.scss';

import { experiences } from '../../../Data';
import { highlights } from '../../../Data';
import { icons } from '../../../Data';

const Skills = () => {
  const [active, setActive] = useState(1);

  return (
    <div
      className='container'
      id='skills'
    >
      <div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className='title'
      >
        <span>What are my skills?</span>
        <h1>Skills & Experience</h1>

        {/* Skills & Experience Buttons */}
        <div className='select'>
          <button
            className={active === 1 ? 'active' : ''}
            onClick={() => setActive(1)}
          >
            Skills
          </button>
          <button
            className={active === 2 ? 'active' : ''}
            onClick={() => setActive(2)}
          >
            Experience
          </button>
        </div>
      </div>

      {/* Skills Icons */}
      <div className='skills'>
        {active === 1 &&
          icons.map((icon, index) => {
            return (
              <div
                className='icon'
                key={index}
              >
                {icon}
              </div>
            );
          })}
      </div>

      {/* Experience Section */}
      <div className='experiences'>
        {active === 2 &&
          experiences.map((experience) => {
            return (
              <div
                className='experience'
                key={experience.id}
              >
                <span>{experience.year}</span>
                <div className='position'>
                  <h3>{experience.position}</h3>
                  <p>{experience.company}</p>
                </div>
              </div>
            );
          })}
      </div>

      {/* Highlight Banner */}
      <div className='highlight_container'>
        {highlights.map((highlight) => {
          return (
            <div
              className='highlights'
              key={highlight.id}
            >
              <div className='number'>{highlight.number}</div>
              <div className='item_name'>{highlight.itemName}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
