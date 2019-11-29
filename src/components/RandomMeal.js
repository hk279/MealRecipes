import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Card, Button, Row, Col } from 'react-bootstrap'

class RandomMeal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomMeal: ""
        };
    }

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
                    });
                }
            )
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });
    }

    render() {
        return(
            <Container id="random-recipe">
                <Card style={{ width: '40rem' }}>
                    <Card.Header><h3>Random Meal</h3></Card.Header>
                    <Row>
                        <Col>
                            <Card.Img variant="top" src={this.state.randomMeal.strMealThumb} />
                        </Col>
                        <Col>
                            <Card.Body className="vertical-center">
                                <Card.Title>{this.state.randomMeal.strMeal}</Card.Title>
                                <Button variant="primary">See Recipe</Button>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Container>
        )
    }
}

export default RandomMeal
