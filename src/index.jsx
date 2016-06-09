import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './hello.jsx'
import { Grid, Row, Col } from 'react-bootstrap';
import styles from './main.scss'

const appRoot = document.createElement('div')
document.body.appendChild(appRoot)

ReactDOM.render(
  <Grid>
    <Row>
      <Col><Hello></Hello></Col>
    </Row>
  </Grid>,
  appRoot
)
