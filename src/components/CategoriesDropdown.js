import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Dropdown, DropdownButton, Jumbotron } from 'react-bootstrap'

class CategoriesDropdown extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          categories: [],
      };
    }
  
    //Gets all of the available meal categories from the API.
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
            <DropdownButton id="categories-dropdown" variant="info" title="Categories">
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

  export default CategoriesDropdown