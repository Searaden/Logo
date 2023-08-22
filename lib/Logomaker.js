const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./shapes');

const collectUserInput = async () => {
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'logoCharacters',
      message: 'Enter up to three characters for the logo:'
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (color keyword or hexadecimal number):'
    },
    {
      type: 'input',
      name: 'backgroundColor',
      message: 'Enter the background color (color keyword or hexadecimal number):'
    },
    {
      type: 'list',
      name: 'logoShape',
      message: 'Choose a logo shape:',
      choices: ['circle', 'square', 'triangle']
    },
  ]);

  return userInput;
};

const generateLogo = (logoCharacters, textColor, backgroundColor, logoShape) => {
  // Create shape instance based on user choice
  let shapeInstance;

  switch (logoShape) {
    case 'circle':
      shapeInstance = new Circle(80, logoCharacters); // Set the radius, you can adjust as needed
      break;
    case 'square':
      shapeInstance = new Square(160, logoCharacters); // Using a fixed side length of 160
      break;
    case 'triangle':
      shapeInstance = new Triangle(160, logoCharacters); // Using a fixed height of 160
      break;
    default:
      console.log('Invalid shape choice');
      return;
  }

  shapeInstance.setColor(backgroundColor);
  shapeInstance.setTextColor(textColor);

  // Generate SVG logo
  const svgLogo = `
  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="white" /> <!-- Set rect fill to white -->
    ${shapeInstance.render()} <!-- Insert the shape's SVG code directly -->
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">
      ${logoCharacters}
    </text>
  </svg>
`;

  // Save the SVG logo to a file
  fs.writeFileSync('logo.svg', svgLogo);

  console.log('Logo generated successfully!');
};

const main = async () => {
  const userInput = await collectUserInput();
  generateLogo(userInput.logoCharacters, userInput.textColor, userInput.backgroundColor, userInput.logoShape);
};

main();
