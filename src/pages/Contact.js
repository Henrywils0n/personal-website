import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Henry Wilson via email @ henrygwwilson@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch for any reason. You can email me at: <a href="mailto:henrygwwilson@gmail.com">henrygwwilson@gmail.com</a> (or any of the icons below)</p>

      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
