import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './hello'
import { Grid, Row, Col } from 'react-bootstrap';

import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import styles from './main.css'

var appRoot = document.createElement('div')
appRoot.id = "app"
document.body.appendChild(appRoot)

ReactDOM.render(
  <Grid>
    <Row>
      <Col><Hello></Hello></Col>
    </Row>
  </Grid>,
  appRoot
)
