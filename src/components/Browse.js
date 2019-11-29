import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import List from './List'
import CategoriesDropdown from './CategoriesDropdown' 

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