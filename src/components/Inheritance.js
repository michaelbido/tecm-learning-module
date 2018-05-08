import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

import Highlight from 'react-highlight';

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
            <Link to={routes.INHERITANCE_QUIZ}><button>Take the quiz on this</button></Link>
        </div>
    )
}

const Inheritance = () => {

    return (
        <div className="InfoPage">
            <h1>Inheritance</h1>
            <h2>Definition</h2>
            <p>By normal definition, inheritance relates to receiving or being left with possessions from a predecessor. In object-oriented programming, the concept is quite similar – classes can inherit properties from other classes. These properties include objects and methods from other classes. </p>
            <p>A class that inherits from other classes is called a child class or a subclass. The class being inherited from is called a parent class or a superclass.</p>
            <p>This is useful for creating new classes from already existing classes. If several objects in a project’s design a similar in nature, then using a superclass as a template for the others can reduce the amount of code required for that project.</p>
            <p>Inheritance is used quite often in object oriented programming.</p>
            <h2>Example Situation</h2>
            <p>Say there are two types of employees that work at a factory: part-time and full-time employees. This needs to be stored programmatically to interact with a company's database. The job functions of both are quite similar, but also differ in minor ways.</p>
            <p>Inheritance can help reduce the amount of code required to create these classes.</p>
            <h2>Java Implementation</h2>
            <p>In Java, the <b>extends</b> keyword is used to declare a new class that will inherit from another. Here is a snippet below:</p>
            <Highlight language='java'>
{`class Superclass {
    // class variables, constructors, methods, etc.
}

class Subclass extends Superclass {
    // class variables, constructors, methods, etc.
}
`}
            </Highlight>
            <p>When the above subclass is declared, it will inherit all of the variables, constuctors and methods from the superclass.</p>
            <p>Below is an implementation of the example situation described eariler:</p>
            <Highlight language='java'>
{`class Employee {
    private String name;
    private String phoneNumber;
    private int staffID;
    
    public Employee(String name, String phoneNuber, int staffID) {
        System.out.println("New Employee has been added");
    }

    // getters/setters and methods
}
`}
            </Highlight>
            <p>As seen above, the parent class Employee is declared. This class can be used as a template for other classes.</p>
            <p>Now, the children classes can be derived from the parent class.</p>
            <p>The <b>super</b> keyword is essential for invoking the superclass constructor from the subclass. It can also be used to differentaite between local (<b>this</b>) variables/methods or parent (<b>super</b>) variables/methods.</p>
            <Highlight language='java'>
{`class FullTime extends Employee {
    private float salary;

    public FullTime(String name, String phoneNuber, int staffID, float salary) {
        System.out.println("New full-time employee has been added");
        // invoke superclass constructor
        super(name, phoneNuber, staffID);
        setPay(salary);
    }

    public void setPay(float s) {
        salary = s;
    }

    public float getBiweeklyPay() {
        // annual salary pay / number of biweeks in a year
        return salary / 26;
    }

    // getters/setters and methods
}

class PartTime extends Employee {
    private float hourly;

    public FullTime(String name, String phoneNuber, int staffID, float salary) {
        System.out.println("New part-time employee has been added");
        // invoke superclass constructor
        super(name, phoneNuber, staffID);
        setPay(salary);
    }

    public void setPay(float h) {
        hourly = h;
    }

    public float getBiweeklyPay() {
        // 20 hours a week, for two weeks * hourly pay
        return hourly * 40;
    }

    // getters/setters and methods
}
`}
            </Highlight>
            <p>Now both types of employees can be created from a single employee class - all without having to 'copy-paste' entire chunks of code. Once instantiated, each subclass's constructor will be invoked.</p>
            <p>Both child class constuctors call the superclass constructor. They also call thier respective <b>setPay()</b> methods as full-time employees and part-time employees are paid differently in our example situation.</p>
            <ToQuiz />
        </div>
    );
}


export default Inheritance;