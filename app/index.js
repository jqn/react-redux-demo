var React = require('react');
var ReactDOM = require('react-dom');

require('./main.css')

ReactDOM.render(
  React.createElement('h1', null, 'Hello world'),
  document.getElementById('app')
);
