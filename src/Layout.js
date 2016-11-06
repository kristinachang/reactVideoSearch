import React from 'react'
// const is immutable. use for stateless components
const Layout = (props) => (
  <div className='app-container'>
    {props.children}
  </div>
)

module.exports = Layout
