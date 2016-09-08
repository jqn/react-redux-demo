import './base.scss'
import 'react-hot-loader/patch'
import React from 'react'
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import provider from './provider'

const appRoot = document.createElement('div')
document.body.appendChild(appRoot)

render(
  <AppContainer>{provider}</AppContainer>,
  appRoot
);

if (module.hot) {
  module.hot.accept('./provider', () => {
    render(
      <AppContainer>{require('./provider').default}</AppContainer>,
      appRoot
    );
  });
}
