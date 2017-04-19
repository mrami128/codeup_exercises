/**
 * Created by user on 4/18/17.
 */


//======== When Numbers on keypad are clicked ============

var numBtns = document.getElementsByClassName("number");
for (var i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener("click", function () {

        if (document.getElementById('display2').value == "") {
            document.getElementById('display').value += this.value
        } else  {
            document.getElementById('display3').value += this.value
        }
    })
}
var operators = document.getElementsByClassName("opBtns");
for (var i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function () {

        document.getElementById('display2').value = this.value
    })
}

//======= Insert Decimal ==================================https://codereview.stackexchange.com/questions/6963/simple-four-function-calculator
//
//     function insertDecimal(dec) {
//  // Select the calculator's display1 and display3
//
//     var display = document.getElementById("display");
//
//  // Loop through the current number to make sure there isn't already a decimal
//     for (i = 0; i < display.value.length; i++)
//         if (display.value.charAt(i) == '.') {
//             // If there is, do nothing
//             return;
//         }
//  // If there isn't add a decimal to the end of the displayed number
//     display.value += dec;
//
//  // in same func check display1 and display3--problem
//     var display3 = document.getElementById("display3");
//
//  // Loop through the 2nd number to make sure there isn't already a decimal
//     for (i = 0; i < display3.value.length; i++)
//         if (display3.value.charAt(i) =='.') {
//             // If there is, do nothing
//             return;
//         }
//   // If there isn't add a decimal to the end of the displayed number
//     display3.value += dec;
//
// }

//======= When Equal Button is clicked ================

var equal = document.getElementById("equal");
equal.addEventListener("click", function () {

    var operator= document.getElementById('display2').value;
    var result= document.getElementById('display4');
    var display = parseFloat(document.getElementById("display").value);
    var display3 = parseFloat(document.getElementById("display3").value);

    switch(operator){
        case "-":
            result.value= parseFloat(display - display3);
            console.log();
            break;
        case "+":
            result.value= (display + display3);
            console.log(result.value);
            break;
        case "/":
            result.value = (display / display3);
            console.log(result.value);
            break;
        case "x":
            result.value= (display * display3);
            console.log(result.value);
            break;
    }
});

//======= When Clear Button is clicked ==========

var clear = document.getElementById("clear");
clear.addEventListener("click",function() {
    document.getElementById("display2").value='';
    document.getElementById("display4").value='';
    document.getElementById("display").value='';
    document.getElementById("display3").value='';
})
