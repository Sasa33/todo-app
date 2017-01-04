import React from 'react'

const Filter = ({status}) => {

  return (
    <li>
      <a href="#/" className="selected">{status}</a>
    </li>
  )
}

export default Filter