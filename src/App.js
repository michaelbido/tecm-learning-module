import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import * as routes from './constants/routes';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage'
import Inheritance from './components/Inheritance';
import Polymorphism from './components/Polymorphism';
import Abstraction from './components/Abstraction';
import Encapsulation from './components/Encapsulation';
import Basics from './components/Basics';
import InheritanceQuiz from './components/InheritanceQuiz';
import PolymorphismQuiz from './components/PolymorphismQuiz';
import AbstractionQuiz from './components/AbstractionQuiz';
import EncapsulationQuiz from './components/EncapsulationQuiz';
import BasicsQuiz from './components/BasicsQuiz';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <Route exact path={routes.HOME} component={() => <HomePage />} />
            <Route exact path={routes.BASICS} component={() => <Basics />} />
            <Route exact path={routes.INHERITANCE} component={() => <Inheritance />} />
            <Route exact path={routes.POLYMORPHISM} component={() => <Polymorphism />} />
            <Route exact path={routes.ABSTRACTION} component={() => <Abstraction />} />
            <Route exact path={routes.ENCAPSULATION} component={() => <Encapsulation />} />
            <Route exact path={routes.BASICS_QUIZ} component={() => <BasicsQuiz />} />
            <Route exact path={routes.INHERITANCE_QUIZ} component={() => <InheritanceQuiz />} />
            <Route exact path={routes.POLYMORPHISM_QUIZ} component={() => <PolymorphismQuiz />} />
            <Route exact path={routes.ABSTRACTION_QUIZ} component={() => <AbstractionQuiz/>} />
            <Route exact path={routes.ENCAPSULATION_QUIZ} component={() => <EncapsulationQuiz />} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
