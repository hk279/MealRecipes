import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import List from './List'

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: []
        };
    }

    componentDidMount() {
        //A necessary workaround to make setState work later.
        const that = this
        
        var url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + this.props.searchWord
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
                                searchResults: data.meals
                            })
                    });
                }
            )
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });
        }

        componentDidUpdate(prevProps) {
            if(this.props.searchWord !== prevProps.searchWord) {
                //A necessary workaround to make setState work later.
                const that = this
                
                var url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + this.props.searchWord
                console.log(url)
                fetch(url)
                    .then(
                        function(response) {
                            if (response.status !== 200) {
                                return;
                            }
                            response.json().then(function(data) {
                                that.setState({searchResults: data.meals})
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
            <List searchResults = {this.state.searchResults} />
        )
    }
}

export default SearchResults