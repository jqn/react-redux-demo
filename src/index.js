import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './hello'

import styles from './main.css'

var appRoot = document.createElement('div')
appRoot.id = "app"
document.body.appendChild(appRoot)

ReactDOM.render(
  <Hello></Hello>,
  appRoot
)
