import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Jumbotron, Button } from 'react-bootstrap'
import RandomMeal from './RandomMeal'
import SearchResults from './SearchResults'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchWord: ""
        };
    }

    render() {
        var sw = this.props.search
        console.log(sw)
        if(sw === "" || !sw) {
            return(
                <Container>
                    <Jumbotron fluid>
                        <Container>
                            <h1>Welcome to Meal Ideas</h1>
                            <p>Start exploring to find inspiration for your next meal!</p>
                            <Button variant="info" href="/browse">Browse Recipes</Button>
                        </Container>
                    </Jumbotron>
                    <RandomMeal />
                </Container>
            )
        } else {
            return(
                <Container>
                    <Jumbotron fluid>
                        <Container>
                            <h1>Welcome to Meal Ideas</h1>
                            <p>Start exploring to find inspiration for your next meal!</p>
                            <Button variant="info" href="/browse">Browse Recipes</Button>
                        </Container>
                    </Jumbotron>
                    <SearchResults searchWord = {sw} />
                </Container>
            )
        }
    }
}

export default Home