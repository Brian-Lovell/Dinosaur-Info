
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

// Dino array
const dinoJson = 
    [
        {
            "species": "Triceratops",
            "weight": 13000,
            "height": 114,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "First discovered in 1889 by Othniel Charles Marsh"
        },
        {
            "species": "Tyrannosaurus Rex",
            "weight": 11905,
            "height": 144,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "The largest known skull measures in at 5 feet long."
        },
        {
            "species": "Anklyosaurus",
            "weight": 10500,
            "height": 55,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Anklyosaurus survived for approximately 135 million years."
        },
        {
            "species": "Brachiosaurus",
            "weight": 70000,
            "height": "372",
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Jurasic",
            "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
        },
        {
            "species": "Stegosaurus",
            "weight": 11600,
            "height": 79,
            "diet": "herbavor",
            "where": "North America, Europe, Asia",
            "when": "Late Jurasic to Early Cretaceous",
            "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
        },
        {
            "species": "Elasmosaurus",
            "weight": 16000,
            "height": 59,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
        },
        {
            "species": "Pteranodon",
            "weight": 44,
            "height": 20,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
        },
        {
            "species": "Pigeon",
            "weight": 0.5,
            "height": 9,
            "diet": "herbavor",
            "where": "World Wide",
            "when": "Holocene",
            "fact": "All birds are living dinosaurs."
        }
    ]
console.log(dinoJson);

//Get form element
const formElem = document.getElementById('dino-compare');

// Factory Function
function Tilemaker(properties) {
    return {
        species : properties.species,
        weight : properties.weight,
        height : properties.height,
        diet : properties.diet,
        where : properties.where,
        when : properties.when,
        fact : properties.fact
    };
}

// We create Dinosaurs
const dino1 = Tilemaker(dinoJson[0]);
console.log(dino1);

const dino2 = Tilemaker(dinoJson[1]);
console.log(dino2);

const dino3 = Tilemaker(dinoJson[2]);
console.log(dino3);

const dino4 = Tilemaker(dinoJson[3]);
console.log(dino4);

const dino5 = Tilemaker(dinoJson[4]);
console.log(dino5);

const dino6 = Tilemaker(dinoJson[5]);
console.log(dino6);

const dino7 = Tilemaker(dinoJson[6]);
console.log(dino7);

const dino8 = Tilemaker(dinoJson[7]);
console.log(dino8);

//Get form data
formElem.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("I'm alive! - formElem fired");

    const human1 = Tilemaker(formElem);
    console.log(human1);
});

// formElem.addEventListener('formdata', (e) => {
//     console.log('Hello there! - formdata fired');

//     let data = e.formData;
//     for (var value of data.values()) {
//         console.log(value);
//     }
// });
