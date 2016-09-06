import React from 'react'
import ReactDOM from 'react-dom'
import provider from './provider'
import bootstrapStyles from 'bootstrap-sass/assets/stylesheets/_bootstrap.scss'

const appRoot = document.createElement('div')
document.body.appendChild(appRoot)

ReactDOM.render(provider, appRoot)
