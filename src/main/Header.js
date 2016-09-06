import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Link} from 'react-router'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'

export default () => {
  return (
    <Navbar fixedTop inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">React Example</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <IndexLinkContainer to="/">
            <NavItem>Home</NavItem>
          </IndexLinkContainer>
          <LinkContainer to="/about">
            <NavItem>About</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
