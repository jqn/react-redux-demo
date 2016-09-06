import React from 'react'
import Header from './Header'

import mainStyles from './main.scss'

export default (props) => {
  return (
    <div>
      <Header />
      <div id="main">
        { props.children }
      </div>
    </div>
  )
}
