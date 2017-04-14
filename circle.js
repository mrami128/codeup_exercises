/**
 * Created by user on 4/14/17.
 */

(function() {
    "use strict";


    var circle = {

        radius: 3,

        setRadius: function(radius){
                    this.radius = radius;
                    },

        getArea: function () {
                                    // hint: area = pi * radius^2
                    return (Math.PI * (Math.pow(this.radius, 2)));

                  },

                logInfo: function (doRounding) {

                    var area = this.getArea();             //  create if/else method for doRounding.
                    if(doRounding) {
                        area = Math.round(area);
                    }
                                 // If doRounding is true, round the result to the nearest integer.
                                // Else output the complete value
                   console.log("Area of a circle with radius: " + this.radius + ", is: " + area);
                  }
    };

    // log info about the circle
    console.log("Raw circle information");
        circle.logInfo(false);

    console.log("Circle information rounded to the nearest whole number");
        circle.logInfo(true);


    console.log("=======================================================");
                        // Change the radius of the circle to 5.
    circle.setRadius(5);
                        // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log('=======================================================');




})();