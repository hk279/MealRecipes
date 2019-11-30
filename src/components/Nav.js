import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          navItems: ["Home", "Browse", "About"],
          searchWord: ""
        };
        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(event) {
        console.log(event.target.value)
        this.setState({searchWord: event.target.value})
      }

      sendData = () => {
        this.props.parentCallback(this.state.searchWord);
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
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.handleChange} value={this.state.searchWord}/>
                <Button variant="outline-success" onClick={() => this.sendData()}>Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        )
      }
}

export default Navigation