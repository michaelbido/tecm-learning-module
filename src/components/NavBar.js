import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

import '../css/NavBar.css';

const DropDown = () => {
    return (
        <div className='dropdown'>
            <button className="dropbutton">Quizzes</button>
            <div className="dropdown__content">
                <Link to={routes.BASICS_QUIZ}><button>OOP Basics</button></Link>
                <Link to={routes.INHERITANCE_QUIZ}><button>Inheritance</button></Link>
                <Link to={routes.POLYMORPHISM_QUIZ}><button>Polymorphism</button></Link>
                <Link to={routes.ABSTRACTION_QUIZ}><button>Abstraction</button></Link>
                <Link to={routes.ENCAPSULATION_QUIZ}><button>Encapsulation</button></Link>
            </div>
        </div>
    )
}

class NavBar extends Component {

    render() {
        return (
            <div className="navbar">
                <img src={require('../images/unt-1890-banner.svg')}/>
                <h1>Object Oriented Programming with Java – For CS Students</h1>
                <div className="buttons">
                    <Link to={routes.HOME}><button>Home</button ></Link>
                    <Link to={routes.BASICS}><button>OOP Basics</button ></Link>
                    <Link to={routes.INHERITANCE}><button>Inheritance</button ></Link>
                    <Link to={routes.POLYMORPHISM}><button>Polymorphism</button ></Link>
                    <Link to={routes.ABSTRACTION}><button>Abstraction</button ></Link>
                    <Link to={routes.ENCAPSULATION}><button>Encapsulation</button ></Link>
                    <DropDown />
                </div>
            </div>
        )
    }
}

export default NavBar;