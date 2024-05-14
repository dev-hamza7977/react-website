import React, { Component } from "react";

class EventHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "Waiting"
        }
    }

    handleClick = (event) => {
        this.setState({ value: "Done" })
    }

    handleInput = (event) => {
        this.setState({ value: event.target.value })
    }

    render() {
        return (
            <>
                <h1> Value : {this.state.value} </h1>
                <button type="button" onClick={this.toggle}> Click Me! </button>
                <input type="text" onChange={this.handleInput}></input>
            </>
        )
    }
}
export default EventHandler