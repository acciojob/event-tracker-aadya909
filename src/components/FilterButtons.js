import React from 'react';

export default function FilterButtons({ setFilter }) {
  return (
    <div>
      <button className="btn" onClick={() => setFilter('all')}>All</button>
      <button className="btn" onClick={() => setFilter('past')}>Past</button>
      <button className="btn" onClick={() => setFilter('upcoming')}>Upcoming</button>
    </div>
  );
}
