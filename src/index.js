import React from 'react'
import ReactDOM from 'react-dom'
import provider from './provider'
import baseStyles from './base.scss'

const appRoot = document.createElement('div')
document.body.appendChild(appRoot)

ReactDOM.render(provider, appRoot)
