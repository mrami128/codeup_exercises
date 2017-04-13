(function(){
    "use strict";

    /**
     * TODO:
     * Create person object, store it in a variable named person
     */

var person = {
    firstName: 'Marc',
    lastName: 'Ramirez',
}

//if adding after object creation  --->  person.middleName="justin";
    person.middleInitial= 'j';
// so now the object person has three
    console.log(person);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example:  person.sayHello() // returns "Hello from Rick Sanchez!"
     */
// //review this bec i did not use return originally
//     person.sayHello=function(){
//        return"hello from " + this.firstName +" "+ this.lastName;
//     };
//     console.log( person.sayHello());
//
//
//     /** TODO: Remember this problem from before?
//      *
//      * HEB has an offer for  shoppers that buy products more than $200. Write a JS program,
//      * using conditionals, that
//      * logs to the browser, how much does Ryan, Cameron and George need to pay. We know that
//      * Cameron bought $180, Ryan $250 and George $320.
//      * Your program will have to
//      * display a line with the
//      *      name of the person, the
//      *      amount before discount,
//      *      the discount, if any, and
//      *      the amount after the discount.
//      *
//      * Uncomment the lines below to create an array of objects where each object
//      * represents one shopper. Use a foreach loop to iterate through the array,
//      * and console.log the relevant messages for each person
//      */
//
// //use array of objects shown below
//
//     var shoppers = [
//         {name: 'Cameron', amount: 180},
//         {name: 'Ryan', amount: 250},
//         {name: 'George', amount: 320}
//      ];
//
//  //review foreach loops -passes in ele,index,array--we used shopper
//
//     shoppers.forEach(function(shopper) {
//     if (shopper.amount >= 200) {
//         var applyDiscount = (shopper.amount) - (shopper.amount * .35);
//
//         console.log(shopper.name + " orig amt " + shopper.amount);
//         console.log(shopper.name + " amt with disc: " + applyDiscount);
//     }
//     console.log("-----------------------");
//
// });


})();

// ANOTHER VARIATION AS ABOVE:

//   shoppers.forEach(function(shopper){
//     var discountRate = .35;
//     var totalDollarsPaid = 0;
//     var discountBreakPointDollars = 200;
//     var outputMessage = " ";

//   if (element.amount > discountBreakDollars){
//     totalDollarsPad =element.amount -(element.ampount*discountRaat);
//   }else{
//            totalDollarsPaid= element.amount; }    });

// outputMesage += shopper.name+"bout "+"$" +shopper.amount+"worth of prod";
// outputMessage += "final paymnt:" + "$";
// outputMessage += (Math.round(totalDollarsPaid * 100)/ 100).oFixed(2) +".";

// console.log("---customer---" +(index +1) + "-------";

// console.log(shopper.amount);