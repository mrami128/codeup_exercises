/**
 * Created by user on 4/12/17.
 */


(function() {
    "use strict";


            // TODO: Create an array holding the names of the eight planets in our solar system in order, starting closest to the sun.
    var planets = ['Venus','Earth','Mars','Saturn'];

            // function for logging the planets array
    function logPlanets() {
        console.log("Here is the list of planets:");
        console.log(planets);
        console.log("------------");
    }

        //call the function
                logPlanets();

                console.log('Adding "The Sun" to the beginning of the planets array.');

                planets.unshift('SUN');
                logPlanets();

                console.log('Adding "Pluto" to the end of the planets array.');

                planets.push('PLUTO');            // TODO: Read the console.log() statement above. Write code to perform the step it describes.
                logPlanets();

                console.log('Removing "The Sun" from the beginning of the planets array.');

                 planets.shift('Sun');           // TODO: Read the console.log() statement above. Write code to perform the step it describes.
                logPlanets();

                console.log('Removing "Pluto" from the end of the planets array.');

                 planets.pop('Pluto');        // TODO: Read the console.log() statement above. Write code to perform the step it describes.
                logPlanets();

                console.log('Finding and logging the index of "Earth" in the planets array.');
                                                // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    var looking = planets.indexOf('Earth');
    console.log(looking,planets[looking]);
    //   also can be separate line item ---> console.log(planets[looking]);
    // another option-- var indexofEarth=planets.indexOf('earth');
    //                  console.log('indexofEarth');


      console.log('Using splice to remove the planet after "Earth".');

           planets.splice(planets.indexOf('earth') + 1, 1 );
           logPlanets();

      console.log('Using splice to add back the planet after "Earth".');

            planets.splice(planets.indexOf('Earth') + 1, 0, 'Mars','Jupiter');
            logPlanets();

    console.log("Reversing the order of the planets array.");

            planets.reverse();
            logPlanets();

     console.log("Sorting the planets array.");

            planets.sort();
            logPlanets();

     console.log('============');

    var namesArray = ['Joe', 'Bob', 'Sally'];

    console.log(namesArray);
        // ['Joe', 'Bob', 'Sally']

    var namesString = namesArray.join(',');

    console.log(namesString);
// Joe,Bob,Sally


})();
