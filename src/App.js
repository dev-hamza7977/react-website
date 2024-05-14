import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Test from "./Test";
import Home from './Home';
import Blog from "./Blog"
import Contact from './Contact';
import New from './New';
import ClassAndFunctions from "./ClassAndFunctions";
import ConditionalRendering from './ConditionalRendering';
import ListRendering from './ListRendering';
import EventHandler from './EventHandler';
import LifeCycle from './LifeCycle';
import AxiosInfo from './AxiosInfo';
import FunctionHooks from './FunctionHooks';
import Styling from './Styling';

// function App() {
//   return <>
//     <Test />
//     <Blog />
//     <New /> 
//   </>
// }

class App extends Component {

  // render() {
  //   return <>
  //     <ClassAndFunctions />
  //   </>

  // }

  // ======================== If Fragment Is In Next Line It will Need Bracket to Return ===============================

  render() {
    return (
      <>
        {/* <ClassAndFunctions /> */}
        {/* <ConditionalRendering /> */}
        {/* <ListRendering /> */}
        {/* <EventHandler /> */}
        {/* <LifeCycle /> */}
        {/* <AxiosInfo /> */}
        {/* <FunctionHooks /> */}
        {/* <Styling /> */}
        
        <Router>
          <h1>
            <Link to="/" >Home</Link>

          </h1>
          <h1>
            <Link to="/blog" > Blog </Link>
          </h1>
          <h1>
            <Link to="/contact" > Contact </Link>
          </h1>
<hr/>
          <switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </switch>
        </Router >


      </>
    )
  }

}

export default App;
