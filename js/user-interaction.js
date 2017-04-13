"use strict";



        // TODO: Ask the user for their name. Keep asking if an empty input is provided.//

     do {
         var uName = prompt("whats your name");
     } while (uName==="") ;

// //version 2 of above//
//
//       var uName = prompt("hello. what is your name?");
//             while(!uName){
//             uName=prompt("need the name bef moving fwd")
//             };


         // TODO: Show an alert message that welcomes the user based on their input.

alert("thanks "+uName);

        // TODO: Ask the user if they like pizza.
        //       Based on their answer show a creative alert message.

    var confirmed = confirm('Do you like the pizza?');

        // we can now use the confirmed variable to make a conditional action

    if (confirmed) {
        alert("yes..i like the pizza too!");
    }
        alert(" too bad because..pizza is good.");

// fyi-could have done var prompt and then use switch to create vasrious responses://

//====Exer 2: ==================//


var RegUser = confirm('Are you Regi User?');

    if (confirmed) {
        alert("good enter password:");


    }
        alert(" too bad goto SIGNUP link:");
            var uName = prompt("first- what is your name?");
            while(!uName){
            uName=prompt("need the name bef moving fwd")
            };

        var pass = prompt("enter complex passwrd");
        while(!pass){
            pass=prompt("need the name bef moving fwd")
        };


