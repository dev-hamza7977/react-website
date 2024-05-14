// import React, { Component } from "react";

// class ConditionalRendering extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: "waiting",
//             heading: true
//         }
//     }

//     toggle = () => {
//         this.setState({ heading: !this.state.heading })
//     }

//     render() {
//         return (
//             <>
//                 <h1>{this.state.heading ? <h2>vlaue : {this.state.value}</h2> : <h2>No Heading</h2>}</h1>
//                 <button type="button" onClick={this.toggle}> Toggle </button>
//                 {/* <button type="button" onClick={ () => {
//                     this.setState({ heading: this.state.heading = false })
//                 }}> Toggle </button> */}

//             </>
//         )
//     }
// }

// export default ConditionalRendering