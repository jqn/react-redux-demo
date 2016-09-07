import React from 'react'

const style = {
  padding: '20px',
  backgroundColor: '#f8f8f8'
}

export default props => {
  return (
    <div style={style}>
      {props.children}
    </div>
  )
}
