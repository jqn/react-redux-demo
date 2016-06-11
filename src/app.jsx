import React from 'react'
import Header from './header.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div id="main">
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default App
