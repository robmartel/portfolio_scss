import React from 'react';
import './Home.scss';

import portfolio from '../../../assets/portfolio.jpg';
import { motion } from 'framer-motion';

const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        repeat: 3,
        duration: 2,
        delay: 2,
      },
    },
  };

  return (
    <motion.div
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
      className='container'
      id='home'
    >
      {/* Profile Image */}
      <div className='profile'>
        <img
          src={portfolio}
          alt='portfolio-image'
        />
      </div>

      {/* Profile Heading */}
      <div className='profile_text'>
        <h3 className='name'>
          Hey, I'm <span>Rob Martel</span>
        </h3>
        <span className='job'>a Full Stack Web Developer</span>
        <span className='text'>
          Passionate <br /> to create innovative <br /> web products.
        </span>

        {/* Contact Button */}
        <motion.a
          href='#contact'
          variants={moveVariants}
          whileHover={{ scale: 1.1 }}
          animate='animation'
        >
          Connect with me
        </motion.a>

        {/* Skills */}
        <div className='web'>Web Developer</div>
        <div className='freelance'>Freelancer</div>
        <div className='fullstack'>Full Stack</div>
      </div>
    </motion.div>
  );
};

export default Home;
