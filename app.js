
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
const formElement = document.getElementById('dino-compare');

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
formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("I'm alive! - formElem fired");

    let formSpecies = document.getElementById('species').value;
    console.log(formSpecies);

    let formHeightFeet = document.getElementById('feet').value;
    console.log(formHeightFeet);

    let formHeightInches = document.getElementById('inches').value;
    console.log(formHeightInches);

    let formWeight = document.getElementById('weight').value;
    console.log(formWeight);

    let formDiet = document.getElementById('diet').value;
    console.log(formDiet);

    let formArray = 
    [
        {
            species : formSpecies,
            height : formHeightFeet,
            weight : formWeight,
            diet : formDiet
        }
    ]
    console.log(formArray);

    const human1 = Tilemaker(formArray[0]);
    console.log(human1);
    })

function createGrid() {
    // Access  main id grid
    const mainGrid = document.getElementById('grid');

    // Create Tile class grid-item
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';
    mainGrid.appendChild(gridItem);

    // Create elements h3 img and p
    const headerThree = document.createElement('h3');
    const image = document.createElement('img');
    const paragraph = document.createElement('p');

    gridItem.appendChild(headerThree);
    gridItem.appendChild(image);
    gridItem.appendChild(paragraph);

    const imagePath = '/images/human.png'

    image.src = imagePath;
}

