import React from 'react';
import './Home.scss';

import portfolio from '../../../assets/portfolio.jpg';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div
      className='container'
      id='home'
    >
      <div className='profile'>
        <img
          src={portfolio}
          alt='portfolio-image'
        />
      </div>
      <div className='profile_text'>
        <h3 className='name'>
          Hey, I'm <span>Rob Martel</span>
        </h3>
        <span className='job'>a Full Stack Web Developer</span>
        <span className='text'>
          Passionate <br /> to create innovative <br /> web products.
        </span>
        <motion.a
          href='contact'
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Connect with me
        </motion.a>
        <div className='web'>Web Developer</div>
        <div className='freelance'>Freelancer</div>
        <div className='fullstack'>Full Stack</div>
      </div>
    </div>
  );
};

export default Home;
