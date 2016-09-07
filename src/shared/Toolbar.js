import React from 'react'

const style = {
  marginBottom: '20px'
}

export default props => {
  return (
    <div style={style}>
      {props.children}
    </div>
  )
}
