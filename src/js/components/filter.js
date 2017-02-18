import React from 'react';

const Filter = ({ filter, title, selected, onFilterChange }) => {
  return (
    <li>
      <a className={selected ? 'selected' : ''}
        onClick={() => onFilterChange(filter)}
      >
        {title}
      </a>
    </li>
  );
};

export default Filter;
