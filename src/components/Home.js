import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Jumbotron, Button, Form, FormControl } from 'react-bootstrap'
import RandomMeal from './RandomMeal'
import SearchResults from './SearchResults'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchWord: "",
            showList: false
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event) {
        this.setState({searchWord: event.target.value})
      }

    handleClick = () => {
        if(this.state.searchWord !== "") {
            this.setState({
                showList: true
            })
        }
    }

    render() {
        if(this.state.showList !== true) {
            return(
                <Container>
                    <Jumbotron fluid>
                        <Container>
                            <h1>Welcome to Meal Ideas</h1>
                            <p>Start exploring to find inspiration for your next meal!</p>
                            <Button variant="info" href="/browse" style={{marginBottom: "1em"}}>Browse Recipes</Button>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.handleChange} value={this.state.searchWord}/>
                                <Button variant="success" onClick={this.handleClick}>Search</Button>
                            </Form>
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
                            <Button variant="info" href="/browse" style={{marginBottom: "1em"}}>Browse Recipes</Button>
                            <Form inline>
                                <FormControl 
                                type="text" 
                                placeholder="Search" 
                                className="mr-sm-2" 
                                onChange={this.handleChange} 
                                value={this.state.searchWord}
                                />
                                <Button variant="success" onClick={this.handleClick}>Search</Button>
                            </Form>
                        </Container>
                    </Jumbotron>
                    <SearchResults searchWord = {this.state.searchWord} />
                </Container>
            )
        }
    }
}

export default Home