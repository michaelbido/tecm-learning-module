import React, { Component } from 'react';

const HomePage = () => {
    return (
        <div className="InfoPage">
            <h1>Welcome to my Online Training Module</h1>
            <h2>Name: Michael Bido-Chavez</h2>
            <h2>Class: TECM 4250, Spring 2018</h2>
            <p>This module contains information on object oriented programming for CS students.</p>
            <p>The topics in this training module are: </p>
            <ul>
                <li>Object Oriented Programming Basics</li>
                <li>Inheritance</li>
                <li>Polymorphism</li>
                <li>Abstraction</li>
                <li>Encapsulation</li>
            </ul> 
            <p>There are also quizzes for each topic.</p>
            <p>The navbar at the top can be used to navigate to each of the pages. The quizzes button in the navbar contains a dropdown menu to each quiz as well.</p>
            <p>Quizzes can also be accessed at the end of each training topic.</p>
        </div>
    );
}

export default HomePage;