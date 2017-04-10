/**
 * Created by user on 4/10/17.
 */
"use strict"

//var luckyNumber = Math.floor(Math.random()* 6)
//console.log("Random number selected is: "+luckyNumber);//
//

var custPurch = 60

var luckyNumber = Math.floor(Math.random()*6)
    console.log("Random number selected is: "+luckyNumber)

var disc = 0;

switch (luckyNumber) {

    case 1:
        console.log("rec. 10% discount");
        disc= 0.10;
        break;

    case 2:
        console.log("rec. 25% discount");
        disc=  0.25;
        break;

    case 4:
        console.log("rec. 50% discount");
        disc= 0.50;
        break;

    case 5:
        console.log("rec. 100% discount");
        disc= 1.0;
        break;

    default:
        console.log("No special discount today.");
}

var totalCost = (custPurch)-(custPurch * disc);

    console.log("your purchase without discount is:" + custPurch.toFixed(2));

    console.log("your randomly selected discount amt is:"+ disc);

    console.log("Total purchase price with discount is: " + totalCost.toFixed(2));


console.log("===========");

console.log("===========");
/* ==================================== */


var luckyNumber = Math.floor(Math.random()*12);


console.log("Random number selected is: "+ luckyNumber)


switch (luckyNumber) {

    case 0:
        console.log("jan");
        break;

    case 1:
        console.log("feb");
        break;

    case 2:
        console.log("mar");
                break;

    case 3:
        console.log("apr");
                break;

    case 4:
        console.log("may");
                break;

    case 5:
        console.log("jun");
                break;

    case 6:
        console.log("jul");
                break;
    case 7:
        console.log("aug");
                break;

    case 8:
        console.log("sep");
        break;

    case 9:
        console.log("oct");
        break;
    case 10:
        console.log("nov");
        break;
    case 11:
        console.log("dec");
        break;

    default:
        console.log("Something went wrong here press reset.");
}
