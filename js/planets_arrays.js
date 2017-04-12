/**
 * Created by user on 4/12/17.
 */


(function() {
    "use strict";


            // TODO: Create an array holding the names of the eight planets in our solar system in order, starting closest to the sun.
    var planets = ['venus','earth','mars','saturn'];

            // function for logging the planets array
    function logPlanets() {
        console.log("Here is the list of planets:");
        console.log(planets);
        console.log("------------");
    }

                logPlanets();

                console.log('Adding "The Sun" to the beginning of the planets array.');

                                                    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
                planets.unshift('SUN');
                logPlanets();

                console.log('Adding "Pluto" to the end of the planets array.');

                planets.push('PLUTO');            // TODO: Read the console.log() statement above. Write code to perform the step it describes.
                logPlanets();

                console.log('Removing "The Sun" from the beginning of the planets array.');

                 planets.shift('sun');           // TODO: Read the console.log() statement above. Write code to perform the step it describes.
                logPlanets();

                console.log('Removing "Pluto" from the end of the planets array.');

                 planets.pop('pluto');        // TODO: Read the console.log() statement above. Write code to perform the step it describes.
                logPlanets();

                console.log('Finding and logging the index of "Earth" in the planets array.');
                                                // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    var looking = planets.indexOf('earth');
    console.log(looking,planets[looking]);
//   also can be separate line item ---> console.log(planets[looking]);

                console.log('Using splice to remove the planet after "Earth".');
                                           // TODO: Read the console.log() statement above. Write code to perform the step it describes.

                var removed = planets.splice(colors.indexOf('earth'), 1);

            console.log(removed);

                logPlanets();

                console.log('Using splice to add back the planet after "Earth".');
                // TODO: Read the console.log() statement above. Write code to perform the step it describes.
                logPlanets();

                console.log("Reversing the order of the planets array.");
                // TODO: Read the console.log() statement above. Write code to perform the step it describes.
                logPlanets();

                console.log("Sorting the planets array.");
                // TODO: Read the console.log() statement above. Write code to perform the step it describes.
                logPlanets();

})();
