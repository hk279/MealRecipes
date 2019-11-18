import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, ListGroup, Dropdown, DropdownButton } from 'react-bootstrap'

class CategoriesDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        categories: [],
        selectedCategory: "",
        selectedMainIngredient: ""
    };
    this.handleClick = this.handleClick.bind(this);
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

    sendData = () => {
      this.props.parentCallback(this.state.selectedCategory);
    }

    handleClick() {
      console.log('hello')
    }

  render() {
    return(
      <Container>
        <DropdownButton id="dropdown-basic-button" title="Categories">
          {this.state.categories.map(item => (
            <Dropdown.Item 
            key={item.strCategory} 
            onClick={() => {this.setState({selectedCategory: item.strCategory}); this.sendData()}}>
              {item.strCategory}
            </Dropdown.Item>
          ))}
        </DropdownButton>
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
      var selectedCategory = this.props.filter
      var url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + selectedCategory
      if (url === "https://www.themealdb.com/api/json/v1/1/filter.php?c=") {
        url = "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
      }
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

    render() {
    return(
        <Container>
            <ListGroup variant="flush">
              {this.state.filteredMeals.map(item => (
                <ListGroup.Item key={item.strMeal}>{item.strMeal}</ListGroup.Item>
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
  return(
      <Container>
        <CategoriesDropdown parentCallback = {this.callbackFunction} />
        <List filter = {this.state.selectedCategory} />
      </Container>
      )
  }
}

export default Browse