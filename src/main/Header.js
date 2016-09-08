import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Link} from 'react-router'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'

export default () => {
  return (
    <Navbar fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Tund</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/projects">
            <NavItem>Projects</NavItem>
          </LinkContainer>
          <LinkContainer to="/time_tracking">
            <NavItem>Time Tracking</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
