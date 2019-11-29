import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Jumbotron, Button } from 'react-bootstrap'
import RandomMeal from './RandomMeal'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
      return(
        <Container>
            <Jumbotron fluid>
                <Container>
                    <h1>Welcome to Meal Ideas</h1>
                    <p>Start exploring to find inspiration for your next meal!</p>
                    <Button href="/browse">Browse Recipes</Button>
                </Container>
            </Jumbotron>
            <RandomMeal />
        </Container>
      )
    }
}

export default Home