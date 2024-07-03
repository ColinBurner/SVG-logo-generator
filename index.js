// Imports necessary modules and classes
const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

// Array of questions to prompt the user
const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo:',
    validate: input => input.length <= 3 || 'Text must be up to three characters long',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (color keyword or hexadecimal):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for the logo:',
    choices: ['Triangle', 'Circle', 'Square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (color keyword or hexadecimal):',
  },
];

// Prompt the user with questions and handle the responses
inquirer.prompt(questions).then(answers => {
    // Destructure the answers object
  const { text, textColor, shape, shapeColor } = answers;
  let shapeInstance;
  let textPosition = {
    x: '150',
    y: '125',
    fontSize: '60',
  };

  // Create an instance of the selected shape and adjust text position if necessary
  switch (shape) {
    case 'Triangle':
      shapeInstance = new Triangle();
      textPosition = {
        x: '150',
        y: '150',
      };
      break;
    case 'Circle':
      shapeInstance = new Circle();
      break;
    case 'Square':
      shapeInstance = new Square();
      break;
  }

  // Set the color of the shape
  shapeInstance.setColor(shapeColor);

  // Create the SVG content with the shape and text
  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeInstance.render()}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;

  // Write the SVG content to a file
  fs.writeFileSync('logo.svg', svgContent.trim());
  console.log('Generated logo.svg');
});