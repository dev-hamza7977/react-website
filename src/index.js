import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// const element = React.createElement("h1", null, "Assalamualaikum" );
// const element = React.createElement("ul", null, React.createElement("li", null, "Hamza"),
//                                                 React.createElement("li", null, "Hamza"),
//                                                 React.createElement("li", null, "Hamza"));

// const ellement = 
// <ul>
//   <li>Hamza</li>
//   <li>Mehboob</li>
// </ul>;



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// ReactDOM.render(ellement, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

