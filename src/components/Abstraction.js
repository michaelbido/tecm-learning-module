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
            <Link to={routes.ABSTRACTION_QUIZ}><button>Take the quiz on this</button></Link>
        </div>
    )
}

const Abstraction = () => {
    return (
        <div className="InfoPage">
            <h1>Abstraction</h1>
            <h2>Definition</h2>
            <p>Abstraction in object oriented programming is the concept of where only the essential details of an object are displayed to the user. Specifically, an object should be viewed as a whole by a user. This allows for generalization of classes, allowing for more flexibility for children classes that will inherit from the abstract class.</p>
            <p>A method invoked in a class may consists of many complicated parts, but the user should only know that it works. </p>
            <p>A simple way to remember this is that the user should only know the what, not the how.</p>
            <h2>Example Situation</h2>
            <p>Say that we want to classify mammals for a machine learning project. Many animals typically do the same things (e.g. sleep, eat, walk), but often in many different ways. </p>
            <p>Abstraction helps create templates for those mammals and leaves the ambiguous details for later implementation.</p>
            <h2>Java Implementation</h2>
            <p>In Java, an abstract class or method contains the <b>abstract</b> keyword in its declaration. Abstraction can also be achieved with <a href="https://docs.oracle.com/javase/tutorial/java/concepts/interface.html">interfaces</a>. The <b>abstract</b> keyword follows some basic rules:</p>
            <ul>
                <li>An abstract class is a class that is declared with abstract keyword.</li>
                <li>Abstract methods are declared without implementation.</li>
                <li>An abstract class may or may not have all abstract methods.</li>
                <li>If a class has at least one abstract method, the class must also be abstract.</li>
                <li>An abstract method must always be redefined in the child class.</li>
                <li>Abstract classes only be inherited from – they cannot be instantiated.</li>
                <li>An abstract class can have parameterized constructors.</li>
            </ul>
            <p>You can declare an abstract class/method by using the <b>abstract</b> keyword before the declaration.</p>
            <Highlight language='java'>
{`public abstract class Mammal {
    private float weight;

    public Mammal(float weight) {
        this.weight = weight;
    }

    public void eat(Object food) {
        // interact with food
    }

    public void drink(Object water) {
        // interact with water
    }

    public abstract void makeNoise();
}
`}
            </Highlight>
            <p>As seen above, the declared class <b>Mammal</b> is abstract. Additionally, the method <b>makeNoise()</b> is also abstract. If you were to try to create an instance of an object from this class, the program would not compile. It is important to follow the rules listed above.</p>
            <p>Now, other mammals can be derived from the parent class <b>Mammal</b>.</p>
            <Highlight language='java'>
{`public Dog extends Mammal {

    public Dog(float weight) {
        super(weight);
    }
    public void makeNoise() { 
        System.out.println("Woof!");
    }
}

public Cat extends Mammal {
    public cat(float weight) {
        super(weight);
    }
    public void makeNoise() { 
        System.out.println("Meow.");
    }
}`}
            </Highlight>
            <p>When <b>makeNoise()</b> is called, the class's respective function will be called. For an abstract method, the logic must be defined in the child class. This is important when declaring a new child class, as this will ensure that the proper methods get redefined.</p>
            <ToQuiz />
        </div>
    );
}

export default Abstraction;