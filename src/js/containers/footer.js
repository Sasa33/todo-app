'use strict';

import React, { Component } from 'react';
import Filter from '../components/filter'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <span className="todo-count">? items lef</span>
        <ul className="filters">
          <Filter key={0} status="All" />
          <Filter key={1} status="Active" />
          <Filter key={2} status="Completed" />
        </ul>
      </div>
    )
  }
}

export default Footer