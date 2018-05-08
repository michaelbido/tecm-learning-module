import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

import '../css/InfoPage.css';

const ToTop = () => {
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
    });
}

const ToQuiz = () => {
    const styles = {textAlign: 'center', marginLeft: 'auto', marginRight:'auto'}
    const topStyle = {backgroundColor: '#e5e5e5', paddingTop: '2px', paddingBottom:'2px',}


    return(
        <div style={styles} >
            <h3 style={topStyle} onClick={ToTop}>Back to top of page</h3>
            <hr />
            <h1>Test Your Learning</h1>
            <Link to={routes.BASICS_QUIZ}><button>Take the quiz on this</button></Link>
        </div>
    )
}

const Basics = () => {
    return (
        <div className="InfoPage">
            <h1>Object Oriented Programming Basics</h1>
            <h2>What is Object Oriented Programming?</h2>
            <p>Object oriented programming (OOP) focuses on manipulating objects that contain data and procedures that interact with that data. Data is typically stored in variables, such as strings, or in data structures, such as hash maps. The procedures that work with the data are called methods or functions.</p>
            <h2>How is OOP Useful?</h2>
            <p>Object oriented programming is useful for creating modular code and reducing the complexity of programs.</p>
            <p>It follows the Don’t Repeat Yourself programming principle, or DRY for short. If several methods follow a basic pattern, it may be best to reduce the amount of code required for a program. This principle aims to reduce the complexity if systems by dividing them into mangable modules that can be used for repetitive work.</p>
            <p>Repeating code that follows a pattern is bad because it adds to the total length of a program. If there is more code in a program, that means updating a program requires more time to ensure functionality stays the same. If a program is broken down into modules, those modules will be only responsible for the tasks they are designed for. That way, if functionality needs to be changed, only the modules responsible for that functionality should be updated. This can reduce the amount of work (and the amount of headaches) associated with updating a program.</p>
            <h2>What is an Object?</h2>
            <p>An object is an instance of a class. Unless they are of a primative type, many of the useful objects in Java such as maps and lists are derived from built-in classes.</p>
            <h2>What is a Class?</h2>
            <p>A class is a template consisting of data structures and methods. Classes are the backbone of object oriented programming – objects with methods and variables cannot exist without a class.</p>
            <h2>What is a Method?</h2>
            <p>A method is a set of code that can be invoked at any point in a program by utilizing the method's name. This provides functionality to a program's objects once declared.</p>
            <h2>What is a Module?</h2>
            <p>A module is an independent and interchangeable part of a program, typically in the form of a class. A module’s size can vary, depending on the module’s purpose.</p>
            <p>Some modules may contain a single method, while others may contain a collection of classes and the methods within those classes.</p>
            <h2>What are the Four Main Pillars?</h2>
            <p>Object oriented programming consists of four pillars. The four pillars are the following:</p>
            <ul>
                <li>Inheritance</li>
                <li>Polymorphism</li>
                <li>Abstraction</li>
                <li>Encapsulation</li>
            </ul>
            <ToQuiz />
        </div>
    );
}

export default Basics;