// Dino array
const dinoJson =
[
  {
    species: 'Triceratops',
    weight: 13000,
    height: 114,
    diet: 'herbavore',
    where: 'North America',
    when: 'Late Cretaceous',
    fact: 'First discovered in 1889 by Othniel Charles Marsh'
  },
  {
    species: 'Tyrannosaurus Rex',
    weight: 11905,
    height: 144,
    diet: 'carnivore',
    where: 'North America',
    when: 'Late Cretaceous',
    fact: 'The largest known skull measures in at 5 feet long.'
  },
  {
    species: 'Anklyosaurus',
    weight: 10500,
    height: 55,
    diet: 'herbavore',
    where: 'North America',
    when: 'Late Cretaceous',
    fact: 'Anklyosaurus survived for approximately 135 million years.'
  },
  {
    species: 'Brachiosaurus',
    weight: 70000,
    height: '372',
    diet: 'herbavore',
    where: 'North America',
    when: 'Late Jurasic',
    fact: 'An asteroid was named 9954 Brachiosaurus in 1991.'
  },
  {
    species: 'Stegosaurus',
    weight: 11600,
    height: 79,
    diet: 'herbavore',
    where: 'North America, Europe, Asia',
    when: 'Late Jurasic to Early Cretaceous',
    fact: 'The Stegosaurus had between 17 and 22 seperate places and flat spines.'
  },
  {
    species: 'Elasmosaurus',
    weight: 16000,
    height: 59,
    diet: 'carnivore',
    where: 'North America',
    when: 'Late Cretaceous',
    fact: 'Elasmosaurus was a marine reptile first discovered in Kansas.'
  },
  {
    species: 'Pteranodon',
    weight: 44,
    height: 20,
    diet: 'carnivore',
    where: 'North America',
    when: 'Late Cretaceous',
    fact: 'Actually a flying reptile, the Pteranodon is not a dinosaur.'
  },
  {
    species: 'Pigeon',
    weight: 0.5,
    height: 9,
    diet: 'herbavore',
    where: 'World Wide',
    when: 'Holocene',
    fact: 'All birds are living dinosaurs.'
  }
]

// Get form element
const formElement = document.getElementById('dino-compare')

// Factory Function
function Tilemaker (properties) {
  return {
    species: properties.species,
    weight: properties.weight,
    height: properties.height,
    diet: properties.diet,
    where: properties.where,
    when: properties.when,
    fact: properties.fact,
    info1: function () {
      const factChooser = Math.floor(Math.random() * 5)

      if (this.species === 'Human') {
        return this.fact
      }
      if (this.species === 'Pigeon') {
        return 'Fact: ' + this.fact
      }
      if (factChooser === 0) {
        return 'Fact: ' + this.fact
      }
      if (factChooser === 1) {
        return 'Diet: ' + this.diet
      }
      if (factChooser === 2) {
        return 'When: ' + this.when + ' Where: ' + this.where
      }
      if (factChooser === 3) {
        return 'Weight: ' + this.weight + ' vs you: ' + human1.weight
      }
      if (factChooser === 4) {
        return 'Weight: ' + this.diet + ' vs you: ' + human1.diet
      }
      if (factChooser === 5) {
        return 'Weight: ' + this.height + ' vs you: ' + human1.height
      }
    }
  }
}

// We create Dinosaurs
const dinosArray = []
for (let i = 0; i < dinoJson.length; i++) {
  dinosArray[i] = Tilemaker(dinoJson[i])
}

// Get form data
formElement.addEventListener('submit', (e) => {
  e.preventDefault()

  const formSpecies = document.getElementById('species').value

  const formHeightFeet = document.getElementById('feet').value

  const formHeightInches = document.getElementById('inches').value

  const formWeight = document.getElementById('weight').value

  const formDiet = document.getElementById('diet').value

  const formArray =
    [
      {
        species: 'Human',
        fact: formSpecies,
        height: formHeightFeet,
        weight: formWeight,
        diet: formDiet
      }
    ]

  const human1 = Tilemaker(formArray[0])

  dinosArray.push(human1)

  removeForm()

  createGrid(dinosArray)
})

function createGrid (array1) {
  for (let i = 0; i < array1.length; i++) {
    // Access  main id grid
    const mainGrid = document.getElementById('grid')

    // Create Elements
    const gridItem = document.createElement('div')
    const headerThree = document.createElement('h3')
    const image = document.createElement('img')
    const paragraph = document.createElement('p')

    // Add image path
    const imagePath = '/images/' + array1[i].species + '.png'
    image.src = imagePath

    // Add class Name
    gridItem.className = 'grid-item'

    // Add unique Id
    gridItem.id = array1[i].species

    // Add to h3
    headerThree.innerHTML = array1[i].species

    // Add to p
    paragraph.innerHTML = array1[i].info1()

    // Append html elements
    mainGrid.appendChild(gridItem)
    gridItem.appendChild(headerThree)
    gridItem.appendChild(image)
    gridItem.appendChild(paragraph)
  }
}

function removeForm () {
  formElement.innerHTML = ''
}
