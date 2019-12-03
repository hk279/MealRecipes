import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBook, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          navItems: [
            {
              name: "Home",
              url: "/",
              icon: <FontAwesomeIcon icon={faHome} />
            }, 
            {
              name: "Browse",
              url: "/browse",
              icon: <FontAwesomeIcon icon={faBook} />
            }, 
            {
              name: "About",
              url: "/about",
              icon: <FontAwesomeIcon icon={faInfoCircle} />
            }
          ],
        };
      }

      render() {
        return(
          <Navbar bg="light" expand="lg" style={{fontWeight: "bold"}}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                 {this.state.navItems.map((item, i) => 
                  <Nav.Link key={i} href={item.url}>{item.icon}<span style={{marginLeft: "0.5em"}}>{item.name}</span></Nav.Link>
                 )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
      }
}

export default Navigation