import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Jumbotron, Card, Button } from 'react-bootstrap'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomMeal: ""
        };
    }

    //Gets a random meal from the API
    componentDidMount() {
        //A necessary workaround to make setState work later.
        const that = this
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
          .then(
            function(response) {
                if (response.status !== 200) {
                  console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                  return;
                }
                response.json().then(function(data) {
                  that.setState({
                    randomMeal: data.meals[0]
                  });
                  console.log(data.meals[0])
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
            <Jumbotron fluid>
                <Container>
                    <h1>Welcome to Meal Idas</h1>
                    <p>Start exploring to find inspiration for your next meal!</p>
                </Container>
            </Jumbotron>
            <Container>
                <h3>Random Meal</h3>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.state.randomMeal.strMealThumb} />
                    <Card.Body>
                        <Card.Title>{this.state.randomMeal.strMeal}</Card.Title>
                        <Button variant="primary">See Recipe</Button>
                    </Card.Body>
                </Card>
            </Container>
        </Container>
        )
    }
}

export default Home