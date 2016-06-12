import React from 'react'
import ReactDOM from 'react-dom'
import router from './router.jsx'
import styles from './main.scss'

const appRoot = document.createElement('div')
document.body.appendChild(appRoot)

ReactDOM.render(router, appRoot)
