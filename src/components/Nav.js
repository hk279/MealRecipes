import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          items: ["Home", "Browse", "About"],
        };
      }

      render() {
        return(
          <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">{this.state.items[0]}</Nav.Link>
                <Nav.Link href="/browse">{this.state.items[1]}</Nav.Link>
                <Nav.Link href="/about">{this.state.items[2]}</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        )
      }
}

export default Navigation