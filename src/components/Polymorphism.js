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
            <Link to={routes.POLYMORPHISM_QUIZ}><button>Take the quiz on this</button></Link>
        </div>
    )
}

const Polymorphism = () => {
    return (
        <div className="InfoPage">
            <h1>Polymorphism</h1>
            <h2>Definition</h2>
            <p>Polymorphism in object-oriented programming is the concept of one object taking the form of other objects. Specifically, polymorphism allows for classes or methods to be redefined as needed.</p>
            <p>With polymorphism, a superclass can be assigned with with a new instance of subclass. This provides flexibility for assigning existing declarations of classes with newly defined subclasses.</p>
            <p>Polymorphism also relates to overriding. Overridding occurs when a child class overwrites an inherited method by declaring a method with the same name. Overriding allows a child class to provide new functionality of a method.</p>
            <h2>Example Situation</h2>
            <p>Let’s say that we are classifying vehicles in our online catalog. For the majority of cars, mileage can relate to the miles-per-gallon of a given model/make. However, with the emergence of electric vehicles, the system needs to be updated to support the output of battery life instead of just miles-per-gallon.</p>
            <p>Addtionally, a server needs to assign the car of the day, but it needs to be automated and flexible with new types of cars.</p>
            <p>This can be solved with polymorphism.</p>
            <h2>Java Implementation</h2>
            <h3>Object Polymorphism</h3>
            <p>Within Java, object polymorphism can be achieved by first declaring multiple subclasses. Then, an object of type superclass is assigned with a <b>new</b> instance of a subclass.</p>
            <p>First, a parent class must be delcared.</p>
            <Highlight language='java'>
{`class Vehicle {
    private int horsepower;
    private float mpg;
    private int tires;

    public Vehicle(int horsepower, float mpg, int tires) {
        this.horsepower = horsepower;
        this.mpg = mpg;
        this.tires = tires;
    }

    // getters/setters and methods
}
`}
            </Highlight>
            <p>Now that the superclass <b>Vehicle</b> has been declared, subclasses can now be derived from it.</p>
            <Highlight language='java'>
{`class Sedan extends Vehicle {
    private int doors;
    private float trunkSpace;

    public Sedan(int horsepower, float mpg, int tires, float trunkSpace) {
        super(horsepower, mpg, tires);
        this.doors = 4;
        this.trunkSpace = trunkSpace;
    }

    // getters/setters and methods
}

class Coupe extends Vehicle {
    private int doors;
    private float trunkSpace;

    public Coupe(int horsepower, float mpg, int tires, float trunkSpace) {
        super(horsepower, mpg, tires);
        this.doors = 2;
        this.trunkSpace = trunkSpace;
    }

    // getters/setters and methods
}

class PickupTruck extends Vehicle {
    private float bedSpace;
    private doors;

    public PickupTruck(int horsepower, float mpg, int tires, int doors, float bedSpace) {
        super(horsepower, mpg, tires);
        this.doors = doors;
        this.bedSpace = bedSpace;
    }

    // getters/setters and methods
}
`}
            </Highlight>
            <p>Now that we have the <b>Sedan</b>, <b>Coupe</b> and <b>PickupTruck</b> subclasses, we can have a flexible program that can assign a main object for the vehicle we want.</p>
            <Highlight language='java'>
{`// all of the following are valid
Vehcile carOfTheDay = new Sedan(210, 34, 4, 31.5);
Vehcile carOfTheDay = new Coupe(306, 28, 4, 36.5);
Vehcile carOfTheDay = new Truck(390, 222, 4, 92.5);
`}
            </Highlight>
            <p>This allows for a currently selected car of any type to take form of our global object.</p>
            <h3>Overriding</h3>
            <p>Overriding takes place when a child class defines a method with the same name and parameters of that in the parent class. That way, new children classes with different functionality can keep working in other modules.</p>
            <p>Take the vehicle class we declared earlier, and create a method to print to the mileage.</p>
            <Highlight language='java'>
{`class Vehicle {
    private int horsepower;
    private float mileage;
    private int tires;

    public Vehicle(int horsepower, float mpg, int tires) {
        this.horsepower = horsepower;
        this.mileage = mpg;
        this.tires = tires;
    }

    // getters/setters and methods

    public void printMileage() {
        System.out.println("Miles per gallon: " + this.mileage);
    }
}
`}
            </Highlight>
            <p>As seen above, the method <b>printMileage()</b> prints a string displaying the vehicle's mpg. However, this does not apply to electric vehicles. Let's change that with a new subclass.</p>
            <Highlight language='java'>
{`class Electric extends Vehicle {

    public Electric(int horsepower, float batteryLife, int tires) {
        super(horsepower, batteryLife, doors);
    }

    // getters/setters and methods
    @Override
    public void printMileage() {
        System.out.println("Battery Life in Miles: " + this.mileage);
    }
}
`}
            </Highlight>
            <p>Now, when declared elsewhere, an object of class <b>Electric</b> can print out the appropriate message when <b>printMileage()</b> is called.</p>
            <ToQuiz />
        </div>
    );
}

export default Polymorphism;