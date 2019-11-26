import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Card } from 'react-bootstrap'

class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mealName: "",
            mealInstructions: ""
        };
    }

    componentDidMount() {
        //A necessary workaround to make setState work later.
        const that = this
        var url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + this.props.id
        console.log(url)
        fetch(url)
            .then(
              function(response) {
                  if (response.status !== 200) {
                    return;
                  }
                  response.json().then(function(data) {
                    that.setState(
                        {
                            mealName: data.meals[0].strMeal,
                            mealInstructions: data.meals[0].strInstructions
                        })
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
                <Card>
                    <Card.Header>{this.state.mealName}</Card.Header>
                    <Card.Body>{this.state.mealInstructions}</Card.Body>
                </Card>
            </Container>
        )
    }
}

export default Recipe