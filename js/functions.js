/**
 * Created by user on 4/11/17.
 */
"use strict";


        // TODO: Fill in your name here.

var myNameIs = 'Marc';

        /**
         * TODO:
         *  make function called 'sayHello'  takes  parameter 'name'.
         * When called -in braces- make console log to say "hello +name;
         * the function will return the console log message saying "hello to the passed in name.
         *
         * Example
         *  > function sayHello(name)  // returns "Hello, codeup!"
         */

function sayHello(name){
    console.log("Hello "+ name + "!");
}

        /**
         * TODO:
         * Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.
         * Store the result of the function call in a variable named 'helloMessage'.
         * console.log 'helloMessage' to check your work
         */

sayHello(myNameIs);

        // Don't modify the following line, it generates a random number between 1 and
        // 100 and stores it in a variable named random

var random = Math.floor((Math.random()*100)+1);
console.log("random number is: "+ random.toString());

        /**
         * TODO:
         * Create a function called 'isOdd' that takes a number as a parameter.
         * The function should use the ternary operator to return a message.
         * The message should contain the number being checked, and whether or not the
         * number is odd
         *  * Example ...  > isOdd(42) // returns "42 is not odd!"       */

function isOdd (numberToTest){
    (numberToTest %2 ==1) ?  console.log("numberToTest is ODD") : console.log("numberToTest is EVEN")
}

        /**    * TODO:
         * Call the function 'isOdd' passing the variable 'random' as a parameter.
         * console.log *outside of the function* to check your work   */

isOdd(random);