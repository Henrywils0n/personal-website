import React from 'react';
import Table from './Table';
import data from '../../data/stats/personal';

const PersonalStats = () => (
  <>
    <h2>Some stats about me</h2>
    <Table data={data} />
  </>
);

export default PersonalStats;
