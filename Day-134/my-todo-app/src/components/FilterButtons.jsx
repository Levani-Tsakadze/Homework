import React from 'react';

const FilterButtons = ({ filter, setFilter }) => (
  <div>
    <button onClick={() => setFilter('all')}>All</button>
    <button onClick={() => setFilter('active')}>Active</button>
    <button onClick={() => setFilter('completed')}>Completed</button>
  </div>
);

export default FilterButtons;
