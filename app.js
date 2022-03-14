
    // Create Dino Constructor


    // Create Dino Objects


    // Create Human Object

    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic

//  My code -


//Get form element
const formElem = document.getElementById('dino-compare');

//Create obj from from
formElem.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("I'm alive! - formElem fired");

    new FormData(formElem);
});

formElem.addEventListener('formdata', (e) => {
    console.log('Hello there! - formdata fired');

    let data = e.formData;
    for (var value of data.values()) {
        console.log(value);
    }
})

