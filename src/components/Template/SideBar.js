import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Henry Wilson</h2>
        <p><a href="mailto:henrygwwilson@gmail.com">henrygwwilson@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Henry. I am a graduate of <a href="https://www.queensu.ca/mathstat/sites/mastwww/files/uploaded_files/undergraduate/mthe/MathematicsEngineering-Brochure.pdf">Queen&apos;s University&apos;s Applied Mathematics and Engineering </a>
        program. I am looking to work as a programmer,
        with a skillset in mathematical modelling and Artificial intelligence.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Henry Wilson <Link to="/">henrywilson.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
