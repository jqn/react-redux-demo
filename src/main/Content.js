import React from 'react'
import contentStyles from './content.scss'

export default props => {
  return (
    <div className="content container">
      { props.children }
    </div>
  )
}
