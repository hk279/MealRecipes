import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, ListGroup, Dropdown, DropdownButton } from 'react-bootstrap'

var selectedCategory = "";
var selectedMainIngredient = "";

class CategoriesDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        categories: []
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

    handleClick() {
      console.log('hello')
    }

  render() {
    return(
      <Container>
        <DropdownButton id="dropdown-basic-button" title="Categories">
          {this.state.categories.map(item => (
            <Dropdown.Item key={item.strCategory} onClick={() => this.handleClick()}>{item.strCategory}</Dropdown.Item>
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
            meals: []
        };
    }

    render() {
    return(
        <Container>
            <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
        </Container>
        )
    }
}

class Browse extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          meals: []
      };
  }

  render() {
  return(
      <Container>
        <CategoriesDropdown />
        <List />
      </Container>
      )
  }
}

export default Browse