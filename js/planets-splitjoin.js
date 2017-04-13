(function(){
    "use strict";

              //using .split to make the string below into array.

        var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

        console.log(planetsString);
        var planetsArray = planetsString.split("|");

        console.log(planetsArray);
        document.write (planetsArray);
              // Use .join  to bring array into string put <br> tag between each planet...using ('<br>') then console.log() the results.

        var planetsRestring = planetsArray.join(' <br> ');
        console.log(planetsRestring);

                //result is: Mercury <br> Venus <br> Earth <br> Mars <br> Jupiter <br> Saturn <br> Uranus <br> Neptune
        //       Why might this be useful? ..for styling?

        // Bonus: Create a second string that would display your planets in an undordered list.
        //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
        //        console.log() your results.


    var listPlanets = '<ul><li>' +planetsArray.join ('</li><li>') +'</li></ul>';

        console.log(listPlanets);

           document.write(listPlanets);




})();
