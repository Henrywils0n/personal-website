import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const { PUBLIC_URL } = process.env;

const Index = () => (
  <Main
    description={"Henry Wilson's personal website. New Applied Mathematics and Engineering Graduate from Queen's University"}
    fullPage
  >
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Henry Wilson</h2>
        <p><a href="mailto:henrygwwilson@gmail.com">henrygwwilson@gmail.com</a></p>
      </header>
    </section>

    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p>
            Hi, I&apos;m Henry. I am a graduate of <a href="https://www.queensu.ca/mathstat/sites/mastwww/files/uploaded_files/undergraduate/mthe/MathematicsEngineering-Brochure.pdf">Queen&apos;s University&apos;s Applied Mathematics and Engineering </a>
            program. This website encapsulates my journey as a programmer.
            Feel free to look around and reach out to me if you have any questions.
          </p>
          {!window.location.pathname.includes('/about') ? <Link to="/about" className="button">Learn More</Link> : null}
        </div>
      </header>
    </article>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Henry Wilson <Link to="/">henrywilson.com</Link>.</p>
    </section>
  </Main>
);

export default Index;
