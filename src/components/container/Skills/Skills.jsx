import React, { useState } from 'react';
import './Skills.scss';

import { experiences } from '../../../Data';
import { finishes } from '../../../Data';
import { icons } from '../../../Data';

const Skills = () => {
  const [active, setActive] = useState(1);

  return (
    <div
      className='container'
      id='skills'
    >
      <div 
      initial={{opacity: 0}}
      whileInView={{y: [-50, 0], opacity: 1}}
      className='title'>
        <span>What are my skills?</span>
        <h1>Skills & Experience</h1>
      
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

      <div className="finishes_container">
        {finishes.map((finish) => {
          return (
            <div className="finishes" key={finish.id}>
              <div className="number">{finish.number}</div>
              <div className="item_name">
                {finish.itemName}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Skills;
