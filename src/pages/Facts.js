import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Personal from '../components/Stats/Personal';
import Site from '../components/Stats/Site';

const Facts = () => (
  <Main
    title="Facts"
    description="Some statistics about Henry Wilson"
  >
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2><Link to="/stats">Facts</Link></h2>
        </div>
      </header>
      <Personal />
      <Site />
    </article>
  </Main>
);

export default Facts;
