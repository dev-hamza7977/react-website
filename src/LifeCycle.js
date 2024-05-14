import React, { Component } from "react";

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "Web Wonders"
        }
        console.log("Constructor");
    }

    static getDerivedStateFromProps() {
        console.log("GetDerivedStateFromProps");
        return null;
    }

    changeName = () => {
        this.setState({ value: "Meghani Hamza" })
    }

    componentDidUpdate() {
        console.log("ComponentDidUpdate")
    }

    shouldComponentUpdate() {
        console.log("ShouldComponentUpdate")
        return true
    }

    componentDidMount() {
        console.log("ComponentDidMount")
    }

    render() {
        console.log("Render");
        return (
            <>
                <h1>{this.state.value}</h1>
                <button onClick={this.changeName}> Set State</button>
            </>

        )
    }



}
export default LifeCycle