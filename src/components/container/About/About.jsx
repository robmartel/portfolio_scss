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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className='title'
      >
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </motion.div>

      <div className='about_container'>
        {/* About Image */}
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className='about_left'
        >
          <motion.img
            src={portfolio}
            whileHover={{ y: -48, x: -55 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* About Info */}
        <motion.div
          className='about_right'
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
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

          {/* Resume Download */}
          <motion.a
            href='#'
            download=''
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
