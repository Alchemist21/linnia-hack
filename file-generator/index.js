const fs = require('fs');
const faker = require('faker');

/*
  Welcome to the fake file generator! The Linia Team threw this together so you
  could spend less time making fake data and more time building! In order to get
  this working for you, you should change three things:

  1. Change `numberOfFiles` to equal the amount of files you want to generate

  2. Change the `fileSchema` to make that of the data you want to produce. More explantion
     on how to do that in the comment above it.

  3. Change the fileName function to product the name for the file that you want.
*/

/*
  The number of files that the script will generate. Pretty self explanatory.
*/

const numberOfFiles = 1000;

/*
  The schema for the files you want to generate. Keys added to the object will be
  the name of the property that appears in the JSON, and the value will be a function
  that produces the fake data.

  For instance:

  const fileSchema = {
    name: () => 'Sammy'
  }

  Will set translate to:

  {
    "name": "Sammy"
  }

  The included `faker` library provides great methods to produce fake data. Documentation
  can be found here: https://github.com/marak/Faker.js
*/

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getRandomArbitrary(min, max) {
  return (Math.random() * (max - min) + min).toFixed(1);
}

function getGender() {
  let genders = ["M", "F", "NA"];
  let index = getRandomInt(0,3);
  return genders[index];
}

function getDiabetesScore() {
  return getRandomArbitrary(0, 14);
}

function getSymptoms() {
  let symptoms = ["polyuria", "polyphagia", "polydipsia"];
  let userSymptoms = [];
  let numSymptoms = getRandomInt(0,4);
  for (let i = 0; i < numSymptoms; i++) {
    let index = getRandomInt(0,3);
    if (!userSymptoms.includes(symptoms[index])) {
      userSymptoms.push(symptoms[index]);
    }
  }
  return userSymptoms;
}

const fileSchema = {
  // will provide a fake name provided by the library
  id: (() => {
    let id = 0;
    return () => {
      id++;
      return id;
    };
  })(),
  name: faker.name.findName,
  // will increment age by 1 per file
  age: () => getRandomInt(18,100),
  gender: () => getGender(),
  hba1c: () => getDiabetesScore(),
  symptoms: () => getSymptoms(),
};

/*
  A function that produces the name for each file. It will receive the generated data
  for the file as an argument
*/

const generateFileName = (fileData) => fileData.name;

/*
  ***********************************************************
  YOU PROBABLY DONT NEED TO CHANGE ANYTHING BELOW THESE LINES
  ***********************************************************
*/

const generateFileData = () => {
  const fileData = {};

  Object.entries(fileSchema).forEach((pair) => {
    const [ key, value ] = pair;

    if (typeof value !== 'function') {
      throw Error('Value of fileSchema properties must be functions.');
    }

    fileData[key] = value();
  });

  return fileData;
};

const generateFiles = async () => {
  for (let i = 0; i < numberOfFiles; i++) {
    const fileData = generateFileData();
    const fileName = generateFileName(fileData);
    const json = JSON.stringify(fileData);
    fs.writeFileSync(`./files/${fileName}.json`, json);
  }
};

generateFiles();
