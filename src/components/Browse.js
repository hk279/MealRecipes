import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, ListGroup, Dropdown, DropdownButton, Jumbotron } from 'react-bootstrap'

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
            filteredMeals: []
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
                  console.log(data)
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
                  console.log(data)
                });
              }
            )
            .catch(function(err) {
              console.log('Fetch Error :-S', err);
            });
      }
    }

    render() {
      return(
          <Container>
            <h2>{this.props.filter}</h2>
            <ListGroup id="meals-list" variant="flush">
              {this.state.filteredMeals.map(item => (
                <ListGroup.Item action key={item.strMeal}>{item.strMeal}</ListGroup.Item>
              ))}
            </ListGroup>
          </Container>
          )
    }
}

class Browse extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          selectedCategory: "",
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