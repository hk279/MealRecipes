import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Jumbotron } from 'react-bootstrap'

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <Container>
                <Jumbotron>
                    <h2>About</h2>
                    <p>This React application was created in order to inspire people with new and exiting culinary ideas.</p>
                    <p>The recipes found in this application are generated using <a href="https://www.themealdb.com/">The Meal DB -API</a></p>
                    <p><b>Happy browsing!</b></p>
                </Jumbotron>
            </Container>
        )
    }
}

export default About