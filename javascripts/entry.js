require('../less/main.less');

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';


class Entry extends React.Component {
  render() {
    return (
      <div className="myDiv">
        Hello Electron!
      </div>
    )
  }
}

ReactDOM.render(<Entry />, document.getElementById('content'));
