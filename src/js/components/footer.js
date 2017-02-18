import React from 'react';
import Filter from './filter';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/FilterTypes';

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
};


const Footer = ({ filter: selectedFilter, activeCount, onFilterChange }) => {
  return (
    <div className="footer">
      <span className="todo-count">{activeCount} {activeCount > 1 ? 'items' : 'item'} left</span>
      <ul className="filters">
        {
          [SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map((filter, index) => {
            return (<Filter key={index} title={FILTER_TITLES[filter]}
              filter={filter}
              selected={filter === selectedFilter}
              onFilterChange={onFilterChange}
            />);
          })
        }
      </ul>
    </div>
  );
};

export default Footer;
