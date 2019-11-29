import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'

class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mealName: "",
            mealInstructions: "",
            mealIngredients: [],
            mealPictureThumb: ""
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
                        var ingredientsNameAndMeasure = []
                        var meal = data.meals[0]

                        ingredientsNameAndMeasure.push(
                            [meal.strIngredient1, meal.strMeasure1],
                            [meal.strIngredient2, meal.strMeasure2],
                            [meal.strIngredient3, meal.strMeasure3],
                            [meal.strIngredient4, meal.strMeasure4],
                            [meal.strIngredient5, meal.strMeasure5],
                            [meal.strIngredient6, meal.strMeasure6],
                            [meal.strIngredient7, meal.strMeasure7],
                            [meal.strIngredient8, meal.strMeasure8],
                            [meal.strIngredient9, meal.strMeasure9],
                            [meal.strIngredient10, meal.strMeasure10],
                            [meal.strIngredient11, meal.strMeasure11],
                            [meal.strIngredient12, meal.strMeasure12],
                            [meal.strIngredient13, meal.strMeasure13],
                            [meal.strIngredient14, meal.strMeasure14],
                            [meal.strIngredient15, meal.strMeasure15],
                            [meal.strIngredient16, meal.strMeasure16],
                            [meal.strIngredient17, meal.strMeasure17],
                            [meal.strIngredient18, meal.strMeasure18],
                            [meal.strIngredient19, meal.strMeasure19],
                            [meal.strIngredient20, meal.strMeasure20]
                        )
                    
                        that.setState(
                            {
                                mealName: meal.strMeal,
                                mealInstructions: meal.strInstructions,
                                mealIngredients: ingredientsNameAndMeasure,
                                mealPictureThumb: meal.strMealThumb
                            })
                    });
                    }
                )
                .catch(function(err) {
                    console.log('Fetch Error :-S', err);
                });
        }

    componentDidUpdate(prevProps) {
        if(this.props.id !== prevProps.id) {
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
                        var ingredientsNameAndMeasure = []
                        var meal = data.meals[0]

                        ingredientsNameAndMeasure.push(
                            [meal.strIngredient1, meal.strMeasure1],
                            [meal.strIngredient2, meal.strMeasure2],
                            [meal.strIngredient3, meal.strMeasure3],
                            [meal.strIngredient4, meal.strMeasure4],
                            [meal.strIngredient5, meal.strMeasure5],
                            [meal.strIngredient6, meal.strMeasure6],
                            [meal.strIngredient7, meal.strMeasure7],
                            [meal.strIngredient8, meal.strMeasure8],
                            [meal.strIngredient9, meal.strMeasure9],
                            [meal.strIngredient10, meal.strMeasure10],
                            [meal.strIngredient11, meal.strMeasure11],
                            [meal.strIngredient12, meal.strMeasure12],
                            [meal.strIngredient13, meal.strMeasure13],
                            [meal.strIngredient14, meal.strMeasure14],
                            [meal.strIngredient15, meal.strMeasure15],
                            [meal.strIngredient16, meal.strMeasure16],
                            [meal.strIngredient17, meal.strMeasure17],
                            [meal.strIngredient18, meal.strMeasure18],
                            [meal.strIngredient19, meal.strMeasure19],
                            [meal.strIngredient20, meal.strMeasure20]
                        )
                    
                        that.setState(
                            {
                                mealName: meal.strMeal,
                                mealInstructions: meal.strInstructions,
                                mealIngredients: ingredientsNameAndMeasure,
                                mealPictureThumb: meal.strMealThumb
                            })
                    });
                    }
                )
                .catch(function(err) {
                    console.log('Fetch Error :-S', err);
                });
            }
        }

    render() {
        var img
        if (this.props.showImg) {
            img = <Col><img className="meal" src={this.state.mealPictureThumb} alt="Meal"></img></Col>
        } else {
            img = null
        }

        return(
            <Container>
                <Row>
                    <Col>
                        <h3>Ingredients</h3>
                        <ul>
                            {this.state.mealIngredients.map((item, i) => 
                                {if(item[0] !== "") {
                                    return(<li key={i}>{item[1] + " " + item[0]}</li>)
                                }
                                else {
                                    return(null)
                                }}
                            )}
                        </ul>
                    </Col>
                    {img}
                </Row>
                <Row id="instructions">
                    <Col>
                        <h3>Instructions</h3>
                        <p>{this.state.mealInstructions}</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Recipe