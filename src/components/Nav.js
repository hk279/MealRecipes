import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap'

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          navItems: ["Home", "Browse", "About"],
        };
      }

      render() {
        return(
          <Navbar bg="light" expand="lg" style={{fontWeight: "bold"}}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">{this.state.navItems[0]}</Nav.Link>
                <Nav.Link href="/browse">{this.state.navItems[1]}</Nav.Link>
                <Nav.Link href="/about">{this.state.navItems[2]}</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
      }
}

export default Navigation