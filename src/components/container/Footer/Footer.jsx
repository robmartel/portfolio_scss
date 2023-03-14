import React from 'react';
import './Footer.scss';

import { motion } from 'framer-motion';
import { navLinks } from '../../../Data';
import { socialIconFooter } from '../../../Data';

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='footer'
    >
      <div className="footer_content">
        <h3>rob martel</h3>
        <p>This is where i say things that make it look great!</p>
        <div className='social_icons'>
          {socialIconFooter.map((socialIcon) => {
            return <div className="svg" key={socialIcon.id}>
              <a className="social_link" href={socialIcon.value}>
              {socialIcon.icon}
              </a>
              </div>;
          })}
        </div>
        <div className="footer_bottom">
          <p>copyright &copy;2023 <a href="#">rob martel</a> </p>
     

      <div className="footer_menu">
          <ul className="menu_links">
          {navLinks.map((navlink, index) => {
            return (
              <li key={index}>
                <a
                  href={`#${navlink}`}
                  // onClick={() => setToggle(false)}
                >
                  {navlink}
                </a>
              </li>
            );
          })}
          </ul>
      </div>
      </div>
      </div>
    </motion.div>
  );
};

export default Footer;


{/* <div className='copyright'>
        <p>
          Copyright&copy;2023 All rights reserved | Created by
          <span> Rob Martel</span>
        </p>
      </div>
      <div className='followMe'>
        <h4>Follow Me</h4>
        <div className='stick'></div>
        <div className='social_icons'>
          {socialIcons.map((socialIcon, index) => {
            return <div key={index}>{socialIcon}</div>;
          })}
        </div>
      </div> */}
