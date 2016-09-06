import React from 'react'
import ReactDOM from 'react-dom'
import router from './router'

import bootstrapStyles from 'bootstrap-sass/assets/stylesheets/_bootstrap.scss'

const appRoot = document.createElement('div')
document.body.appendChild(appRoot)

ReactDOM.render(router, appRoot)
