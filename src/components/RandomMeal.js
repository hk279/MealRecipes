import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Card, Button, Row, Col, Accordion, AccordionToggle } from 'react-bootstrap'
import Recipe from './Recipe'

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
                        var rand = data.meals[0]
                        that.setState({
                            randomMeal: rand
                        });
                        console.log(rand)
                    });
                }
            )
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });
    }

    render() {
        return(
            <Container id="random-recipe" fluid>
                <Accordion>
                    <Card style={{ maxWidth: '40rem' }}>
                        <Card.Header><h3>Random Meal</h3></Card.Header>
                        <Row>
                            <Col>
                                <Card.Img variant="top" src={this.state.randomMeal.strMealThumb} />
                            </Col>
                            <Col>
                                <div className="vertical-center">
                                    <Card.Title><h2 className="random-meal-name" style={{paddingRight: "1em"}}>{this.state.randomMeal.strMeal}</h2></Card.Title>
                                    <AccordionToggle as={Button} variant="primary" eventKey="1">See Recipe</AccordionToggle>
                                </div>
                            </Col>
                        </Row>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body><Recipe id = {this.state.randomMeal.idMeal} showImg = {false}/></Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Container>
        )
    }
}

export default RandomMeal
