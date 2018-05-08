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
            <Link to={routes.ENCAPSULATION_QUIZ}><button>Take the quiz on this</button></Link>
        </div>
    )
}

const Encapsulation = () => {
    return (
        <div className="InfoPage">
            <h1>Encapsulation</h1>
            <h2>Definition</h2>
            <p>Encapsulation in object oriented programming is the concept of hiding implementation details by wrapping variables and methods into a single module. This means that the variables and methods used for a feature will be hidden from all other classes unless specified to be public.</p>
            <p>This allows for certain modules to remain mostly untouched by others, which helps reduce the complexity of programs. If a module is designed for a specific purpose, then changes made to satisfy a program requirement are less difficult down the road. Encapsulation also helps maintain abstraction.</p>
            <h2>Example Situation</h2>
            <p>Let's say that you are tasked with creating 'student' objects in a school system. This module cannot interfere with other modules. At the very most, it should provide a student's name, GPA and EUID for all other objects. It can only interact with the module handlers.</p>
            <p>This can be achieved with encapsulation – it requires designing an independent class.</p>
            <h2>Java Implementation</h2>
            <p>In Java, encapsulation is achieved via private variables/methods. If a variable requires access outside of the class, then methods called getters and setters are used to retrieve such data.</p>
            <p>For each variable that will be used outside of the class, there should be a get and set method for it.</p>
            <Highlight language='java'>
{`public class Student {
    private String euid;
    private String name;
    private ArrayList<Double> grades;

    // constructor
    public Student(String euid, String name) {
        this.euid = euid;
        this.name = name;
        this.ArrayList<Double> = new ArrayList<Double>();
    }
}
`}
            </Highlight>
            <p>The <b>Student</b> class has three private variables. Since other modules may require them, getters and setters should be declared for each.</p>
            <p>The getters and setters for the strings are relatively straightforward.</p>
            <Highlight language='java'>
{`public class Student {
    private String euid;
    private String name;
    private ArrayList<Double> grades;

    // constructor
    public Student(String euid, String name) {
        this.euid = euid;
        this.name = name;
        this.ArrayList<Double> = new ArrayList<Double>();
    }

    // getters/setters and methods
    public String geteuid() {
        return euid;
    }
    public void seteuid(String e) {
        this.euid = e;
    }
    public String getName() {
        return name;
    }
    public void setName(String n) {
        this.name = n;
    }
}
`}
            </Highlight>
            <p>These functions can now be invoked elsewhere after the class has been instantiated.</p>
            <Highlight language='java'>
{`Student exampleStudent = new Student("ab1234", "Abbey Brown");
System.out.println("Student Name: " + exampleStudent.getName());
System.out.println("Student EUID: " + exampleStudent.geteuid());
`}
            </Highlight>
            <p>The getter for a student's GPA should only return the GPA and not the entire grades object. Addtionally, the setter for grades should only append.</p>
            <Highlight language='java'>
{`public class Student {
    private String euid;
    private String name;
    private ArrayList<Double> grades;

    // constructor
    public Student(String euid, String name) {
        this.euid = euid;
        this.name = name;
        this.ArrayList<Double> = new ArrayList<Double>();
    }

    // getters/setters and methods
    public String geteuid() {
        return euid;
    }
    public void seteuid(String e) {
        this.euid = e;
    }
    public String getName() {
        return name;
    }
    public void setName(String n) {
        this.name = n;
    }

    public double getGPA() {
        double gpa = 0;

        for (int i = 0; i < grades.size(); i++) {
            // for all grades, average them together
            // use local gpa variable
            // then convert to 4.0 scale
        }

        return gpa;
    }

    public void setGrade(double grade) {
        grades.add(grade);
    }
}
`}
            </Highlight>
            <p>Now, all private variables that used outside of the class can now be accessed. This also maintains abstraction.</p>
            <ToQuiz />
        </div>
    );
}

export default Encapsulation;