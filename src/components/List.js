import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Accordion, Card, Button } from 'react-bootstrap'
import Recipe from './Recipe'

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredMeals: [],
            showRecipe: ""
        };
    }

    componentDidMount() {
        if(!this.props.filter) {
          return
        }
        var url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + this.props.filter
        console.log(url)
  
        //A necessary workaround to make setState work later.
        const that = this
        fetch(url)
          .then(
            function(response) {
                if (response.status !== 200) {
                  console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                  return;
                }
                response.json().then(function(data) {
                  that.setState({
                    filteredMeals: data.meals
                  });
                });
              }
            )
            .catch(function(err) {
              console.log('Fetch Error :-S', err);
            });
    }

    componentDidUpdate(prevProps) {
      if (this.props.filter !== prevProps.filter) {
        var url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + this.props.filter
        console.log(url)
  
        //A necessary workaround to make setState work later.
        const that = this
        fetch(url)
          .then(
            function(response) {
                if (response.status !== 200) {
                  console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                  return;
                }
                response.json().then(function(data) {
                  that.setState({
                    filteredMeals: data.meals
                  });
                });
              }
            )
            .catch(function(err) {
              console.log('Fetch Error :-S', err);
            });
      }
    }

    render() {
        if(this.props.searchResults === null) {
          return(
            <Container><h3>No results found</h3></Container>
          )
        }
        if(this.props.searchResults) {
          return(
            <Container>
              <Accordion>
                {this.props.searchResults.map((item) => 
                  <Card key={item.strMeal} onClick={() => this.setState({showRecipe: item.idMeal})}>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey={item.idMeal}>
                        {item.strMeal}
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={item.idMeal}>
                      <Card.Body>
                        {this.state.showRecipe !== "" ? <Recipe id={this.state.showRecipe} showImg = {true} /> : null}
                      </Card.Body>
                    </Accordion.Collapse>                        
                  </Card>
                )}
              </Accordion>
            </Container>
          )
        } else {
          return(
            <Container>
              <h2>{this.props.filter}</h2>
              <Accordion>
                {this.state.filteredMeals.map((item, i) => 
                  <Card key={item.strMeal} onClick={() => this.setState({showRecipe: item.idMeal})}>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey={item.idMeal}>
                        {item.strMeal}
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={item.idMeal}>
                      <Card.Body>
                        {this.state.showRecipe !== "" ? <Recipe id={this.state.showRecipe} showImg = {true} /> : null}
                      </Card.Body>
                    </Accordion.Collapse>                        
                  </Card>
                )}
              </Accordion>
            </Container>
          )    
        }
      }
    }

    export default List