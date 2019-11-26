import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Accordion, Card, Button, Dropdown, DropdownButton, Jumbotron } from 'react-bootstrap'
import Recipe from './Recipe'

class CategoriesDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        categories: [],
    };
  }

  componentDidMount() {
    //A necessary workaround to make setState work later.
    const that = this
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(
        function(response) {
            if (response.status !== 200) {
              console.log('Looks like there was a problem. Status Code: ' +
                response.status);
              return;
            }
            response.json().then(function(data) {
              that.setState({
                categories: data.categories
              });
            });
          }
        )
        .catch(function(err) {
          console.log('Fetch Error :-S', err);
        });
    }

    sendData = (selectedCategory) => {
      this.props.parentCallback(selectedCategory);
    }

  render() {
    var selectedCategory = ""
    return(
      <Container>
        <Jumbotron>
          <h2>Select a category</h2>
          <DropdownButton id="categories-dropdown" title="Categories">
            {this.state.categories.map(item => (
              <Dropdown.Item 
              key={item.strCategory} 
              onClick={() => {selectedCategory = item.strCategory; this.sendData(selectedCategory)}}>
                {item.strCategory}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Jumbotron>
      </Container>
    );
  }
}

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredMeals: [],
            showRecipe: ""
        };
    }

    componentDidMount() {
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
      if(this.state.showRecipe !== "") {
          return(
            <Recipe id={this.state.showRecipe} />
          )
      } else {
        return(

          <Container>
            <h2>{this.props.filter}</h2>
            <Accordion>
              {this.state.filteredMeals.map((item, i) => 
                <Card key={item.strMeal}>
                  <Card.Header>
                    <Accordion.Toggle as={Button} onClick={() => this.setState({showRecipe: item.idMeal})} variant="link" eventKey={item.idMeal}>
                      {item.strMeal}
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={item.idMeal}>
                    <Card.Body></Card.Body>
                  </Accordion.Collapse>                        
                </Card>
              )}
            </Accordion>
          </Container>
          )
      }
    }
}

class Browse extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          selectedCategory: ""
      };
  }

  callbackFunction = (category) => {
    this.setState({selectedCategory: category})
  }

  render() {
    console.log(this.state.selectedCategory)
    if (this.state.selectedCategory !== "") {
      return(
        <Container>
          <CategoriesDropdown parentCallback = {this.callbackFunction} />
          <List filter = {this.state.selectedCategory} />
        </Container>
        )
    } else {
      return(
        <Container>
          <CategoriesDropdown parentCallback = {this.callbackFunction} />
        </Container>
      )
    }
  }
}

export default Browse