import React, { Component } from "react";
import axios from "axios";

class AxiosInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: "Movies"
        }
    }

    componentDidMount() {
        axios.get("http://example.com/movies.json")
            .then(response => this.setState({ movies: response.data }));
    }
}
export default AxiosInfo