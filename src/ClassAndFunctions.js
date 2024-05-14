import React, { Component } from "react";

// ======================== Session I ===============================
// Learn About Class Component as well as Jsx


// class ClassAndFunctions extends Component {
// render() {
//     return <>
//             <h1>Welcome To Web Wonders</h1>
//         </>
//     
// }

// ======================== If Fragment Is In Next Line It will Need Bracket to Return ===============================

// render() {
//     return (
//         <>
//             <h1>Web Wonders Is A Web Development Company</h1>
//         </>
//     )
// }

// ======================== Closing tag Is Compulsory And Needed ======================================================

// render() {
//     return (
//         <>
//             <h1>
//                 WEB WONDERS <br />  something beyond expectations.
//             </h1>
//         </>
//     )
// }

// ======================== How to Run JS in JSx ======================================================

// render() {
//     const num1 = 1;
//     const num2 = 2;

//     return (
//         <>
//             <h1>
//                 Testing JSX and JS
//             </h1>
//             <h1>
//                 {1 + 1}
//             </h1>
//             <h1>
//                 {num1+num2}
//             </h1>
//             <h1>
//                 {new Date().toLocaleDateString()}
//             </h1>
//         </>
//     )

// }

// ======================== How to Call Functions In Class Components And JSX. ======================================================

// add(num1, num2) {
//     return num1 + num2;
// }
// render() {
//     const num1 = 2;
//     const num2 = 3;

//     return (
//         <>
//             <h1>
//                 {
//                     this.add() 
//                 }
//             </h1>
//         </>
//     )

// }

// ======================== How to Call Objects In Class Components And JSX. ======================================================

// add(num1, num2) {
//     return num1 + num2;
// }
// render() {
//     const num1 = 2;
//     const num2 = 3;
//     const testingObj = { name: "Web Wonders", category: "Web Development" }

//     return (
//         <>
//             {/* <h1>{this.add()}</h1> */}
//             <h1>{testingObj.name} is a {testingObj.category} Digital Agency</h1>

//         </>
//     )

// }

// ======================== Conditional Expression in React JSX. ======================================================

// add(num1, num2) {
//     return num1 + num2;
// }
// render() {
//     const num1 = 2;
//     const num2 = 3;
//     const testingObj = { name: "Web Wonders", category: "Web Development" }

//     return (
//         <>
//             {/* <h1>{this.add()}</h1> */}
//             <h1>{testingObj.name} is a {testingObj.category} Digital Agency</h1>
//             <h1> {3 > 2 ? "This is Right" : "is Not"} </h1>
//         </>
//     )

// }

// ======================== Return JSX In JSX Via Function. ======================================================

// add(num1, num2) {
//     return num1 + num2;
// }


// someJSX() {
//     return (
//         <>
//             <ul>
//                 <li>Web Development</li>
//                 <li>App Development</li>
//                 <li>Account Solutions</li>

//             </ul>
//         </>
//     )
// }

// render() {
//     const num1 = 2;
//     const num2 = 3;
//     const testingObj = { name: "Web Wonders", category: "Web Development" }

//     return (
//         <>
//             {/* <h1>{this.add()}</h1> */}
//             {/* <h1>{testingObj.name} is a {testingObj.category} Digital Agency</h1> */}
//             {/* <h1> {3 > 2 ? "This is Right" : "is Not"} </h1> */}
//             <h1> Web Wonders Providing Services Are As Follows: <br /> {this.someJSX()} </h1>

//         </>
//     )

// }

// ======================== Conditional Rendering In JSX. ======================================================

// add(num1, num2) {
//     return num1 + num2;
// }


// someJSX() {
//     return (
//         <>
//             <ul>
//                 <li>Web Development</li>
//                 <li>App Development</li>
//                 <li>Account Solutions</li>

//             </ul>
//         </>
//     )
// }

// conditionalRendering() {
//     if (3 > 2) {
//         return (
//             <h1> Three Is Greater Than Two. </h1>
//         )
//     } else {
//         <h1> Three Is Not Greater Than Two. </h1>

//     }
// }

// render() {
//     const num1 = 2;
//     const num2 = 3;
//     const testingObj = { name: "Web Wonders", category: "Web Development" }

//     return (
//         <>
//             {/* <h1>{this.add()}</h1> */}
//             {/* <h1>{testingObj.name} is a {testingObj.category} Digital Agency</h1> */}
//             {/* <h1> {3 > 2 ? "This is Right" : "is Not"} </h1> */}
//             {/* <h1> Web Wonders Providing Services Are As Follows: <br /> {this.someJSX()} </h1> */}
//             {/* {this.conditionalRendering()} */}
//             {/* {this.conditionalRendering()} */}
//             {/* {this.conditionalRendering()} */}
//         </>
//     )

// }


// const A = () => {
//     return (
//         <h1> This Is Arrow Function Component </h1>
//     )
// }

// class B extends Component {
//     render() {
//         return (
//             <>
//                 <h1>This Is Class Component</h1>
//             </>
//         )
//     }
// }


// class ClassAndFunctions extends Component {
//     render() {
//         return (
//             <>
//                 <h1>This Is Main class Components Which Contains Class And Function Components</h1>
//                 <A />
//                 <B />
//             </>
//         )
//     }
// }

// ================================================= Props In React JS =======================================================================

// function A(props) {
//     // props.firstname = "WebW"
//     // console.log(props)
//     return (
//         <>
//             <h1>{props.firstname}</h1>
//             <h1>{props.lastname}</h1>
//         </>
//     )
// }

// const B = (props) => {
//     return (
//         <>
//             <h1>{props.name}</h1>
//         </>
//     )
// }

// class C extends Component {
//     render() {
//         const { service, someMath, arrays } = this.props;
//         return (
//             <>
//                 <h1>{service}</h1>
//                 <h1>{someMath}</h1>
//                 <h1>{arrays}</h1>
//             </>
//         )
//     }
// }

// class ClassAndFunctions extends Component {
//     render() {
//         return (
//             <>
//                 <A firstname="WEB" lastname="WONDERS" />
//                 <B name="WEB WONDERS" />
//                 <C service="WEB DEVEOPMENT" someMath={1 + 2} arrays={["Web Development ", "App Development ", "Account Web Solutions"]} />
//             </>
//         )
//     }
// }

// }

// ========================================= State And SetState On React.js============================================================

// class ClassAndFunctions extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             company: "Web Wonders",
//             services: "Web Development , App Development",
//             type: "Online Agency"
//         }
//     }

//     changeType = () => {
//         this.setState({ type: "Online Digital Agency" });
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Our Company {this.state.company} Is {this.state.type} Providing Services Such As {this.state.services} </h1>
//                 <button type="button" onClick={this.changeType}> Change </button>
//             </div >
//         )
//     }

// class ClassAndFunctions extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             counter: 0
//         };
//     }

//     increamentFunc = () => {
//         this.setState({ counter: this.state.counter + 1 })
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Tasbih : {this.state.counter}</h1>
//                 <button type="button" onClick={this.increamentFunc}> Click Me </button>
//                 {/* <button type="button" onClick={this.increamentFunc.bind(this)}> Click Me </button> */}
//                 {/* <button type="button" onClick={() => { this.setState({ counter: this.state.counter + 1 }) }}> Click Me </button> */}
//             </div>
//         )
//     }

// }

// =================================================Updating Parent Component From Child Component===================================

class ClassAndFunctions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    increamentFunc = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    render() {
        return (
            <div>
                <h1>Tasbih : {this.state.counter}</h1>
                <button type="button" onClick={this.increamentFunc}> Click Me </button>
                <Child increamentFunc={this.increamentFunc} />
                {/* <button type="button" onClick={this.increamentFunc.bind(this)}> Click Me </button> */}
                {/* <button type="button" onClick={() => { this.setState({ counter: this.state.counter + 1 }) }}> Click Me </button> */}
            </div>
        )
    }

}

const Child = ({ increamentFunc }) => {
    return (
        <div>
            <h1>dfae</h1>
            <button type="button" onClick={() => { increamentFunc() }}> Click Me CC </button>
        </div>
    )
}





export default ClassAndFunctions;