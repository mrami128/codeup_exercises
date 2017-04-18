/**
 * Created by user on 4/18/17.
 */


//==============================

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
//========================================

var equal = document.getElementById("equal");
equal.addEventListener("click",function() {

    var operator= document.getElementById('display2').value;
    var result=document.getElementById('display4');
    var display = parseFloat(document.getElementById("display").value);
    var display3 = parseFloat(document.getElementById("display3").value);

    switch (operator){

        case"x":
            result.value = display * display3;
            console.log(result.value);
            break;
    }
})

var equal = document.getElementById("equal");
equal.addEventListener("click", function () {
    var operator = document.getElementById("display2").value;
    var result = document.getElementById("display4");
    var display = document.getElementById("display").value;
    var display3 = document.getElementById("display3").value;
    switch(operator){
        case "x":
            result.value= display * display3;
            console.log(result.value);
            break;
    }
})

var equal = document.getElementById("equal");
equal.addEventListener("click", function () {
    var operator = document.getElementById("display2").value;
    var result = document.getElementById("display4");
    var display = document.getElementById("display").value;
    var display3 = document.getElementById("display3").value;
    switch(operator){
        case "-":
            result.value= display - display3;
            console.log(result.value);
            break;
    }
})
var equal = document.getElementById("equal");
equal.addEventListener("click", function () {
    var operator = document.getElementById("display2").value;
    var result = document.getElementById("display4");
    var display = parseFloat(document.getElementById("display").value);
    var display3 = parseFloat(document.getElementById("display3").value);
    switch(operator){
        case "+":
            result.value=(display + display3);
            console.log(result.value);
            break;
    }
})

var equal = document.getElementById("equal");
equal.addEventListener("click", function () {
    var operator = document.getElementById("display2").value;
    var result = document.getElementById("display4");
    var display = document.getElementById("display").value;
    var display3 = document.getElementById("display3").value;
    switch (operator) {
        case "/":
            result.value = display / display3;
            console.log(result.value);
            break;
    }
})
var clear = document.getElementById("clear");
clear.addEventListener("click",function() {
    document.getElementById("display2").value='';
    document.getElementById("display4").value='';
    document.getElementById("display").value='';
    document.getElementById("display3").value='';
})
