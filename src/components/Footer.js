import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <section className='footer'>
      <div className='box-container'>
        <div className='box'>
          <h3>Location</h3>
          <a href='#'>Nigeria</a>
        </div>

        <div className='box'>
          <h3>Quick links</h3>
          <Link to='home' offset={-45} spy={true}>
            home
          </Link>
          <Link to='dishes' offset={-45} spy={true}>
            dishes
          </Link>
          <Link to='swallow' offset={-45} spy={true}>
            menu
          </Link>
          <Link to='protein' offset={-45} spy={true}>
            Protein
          </Link>
        </div>

        <div className='box'>
          <h3>Contact info</h3>
          <a href='#'>(+234)81-8213-0057</a>
          <a href='#'>babsodedina@gmail.com</a>
          <a href='#'>babsodedina@yahoo.com</a>
          <a href='#'>lagos, Nigeria</a>
        </div>

        <div className='box'>
          <h3>follow us</h3>
          <a href='#'>facebook</a>
          <a href='#'>twitter</a>
          <a href='#'>instagram</a>
          <a href='#'>linkedin</a>
        </div>
      </div>

      <div className='credit'>
        copyright &copy; 2022 by <span>Odedina Babatunde</span>
      </div>
    </section>
  );
};

export default Footer;
