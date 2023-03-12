import React from 'react';
import './About.scss';

import { bios } from '../../../Data';
import portfolio from '../../../assets/portfolio.jpg';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div
      className='container'
      id='about'
    >
      <div className='title'>
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </div>
      <div className='about_container'>
        <div className='about_left'>
          <img
            src={portfolio}
            alt='about_image'
          />
        </div>
        <div className='about_right'>
          <p>
            This is where you write a bunch of stuff about me. Thing like you
            love walks in the rain, and rainbows and lollipops. This is the
            place where all the great stuff is going to be written, and then
            everyone will love you.
          </p>
          {bios.map((bio) => {
            return (
              <div
                className='bio'
                key={bio.id}
              >
                <span className='biokey'>
                  {bio.icon}
                  {bio.key}
                </span>
                <span className='bioValue'>{bio.value}</span>
              </div>
            );
          })}
          <motion.a
            href='#'
            download=''
            whileHover={{scale: 1.1}}
            transition={{duration: 0.3}}
          >
            Download Resume
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default About;
