/**
 * Created by user on 4/10/17.
 */
"use strict";


/** for problem 1:  could do this :
 *    var gradeAverage =(70+80+95) / 3;
 *    var message ="";
 *
 *    if(gradeAverage>80) { console
 *
 *  **/

var t1=70;
var t2=80;
var t3=95;

var total=t1+t2+t3;
    console.log("After 3 tests, your total points are: "+ total);

var avg= total/3;
    console.log("Your average grade at this point is: "+ avg);

if (avg > 80) {
    console.log("Over 80%...Awesome, good work!");
} else {
    console.log("Below 80%..Ok, you need some additional practice")}


console.log("=================BREAK==============");

var discountRate =.65;


var ryan = 250;
var cameron = 180;
var george = 320;

if (ryan <200) {
     var needed = 200 - ryan;
     console.log("Ryan, you need to purchase $ "+ needed, " in order to qualify for over $200 discount. Your current total due is:$"+ryan );
} else {
     console.log("Ryan You have purchased: $ " + ryan, " You qualify for the over $200 purchased discount. You save 35%, new total due is: $" + ryan * discountRate);
}

if (cameron <200) {
    var needed = 200 - cameron;
    console.log("Cameron, you need to purchase $ "+ needed + " in order to qualify for over $200 discount Your current total due is:$"+cameron );
} else {
    console.log("Cameron You have purchased: $ " + cameron + "therefore you qualify for the over $200 purchased discount. You save 35%, new total due is: $" + cameron * discountRate);
}

if (george <200) {
    var needed = 200 - george;
    console.log("George You need to purchase $ "+ needed + " in order to qualify for over $200 discount Your current total due is:$"+george );
} else {
    console.log("George You have purchased: $ " + george + " therefore you qualify for the over $200 purchased discount. You save 35%, new total due is: $" + george * discountRate);
}


console.log("==============BREAK============");



//   get a random number //
var flipACoin = Math.floor(Math.random()* 2);

// show what was flipped//
    console.log("We just randomly flipped coin ,the value is: "+ flipACoin +"!!");

     // optional ternary ----
     //      var choice = (flipACoin) ? "buy house": "Buy Car";

    // if else messages ---also 1 can be true so//
    if (flipACoin) {
        console.log("flip of 1 = heads means buy HOUSE");
    }    else {
        console.log("flip of 0 = tails means buy a  CAR");
    }