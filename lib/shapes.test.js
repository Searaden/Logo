const { Circle, Square, Triangle } = require('./shapes');

describe('Circle', () => {
  test('render method should return the correct SVG string', () => {
    const circle = new Circle(50);
    circle.setColor('blue');
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="50" fill="blue" />');
  });
  // Add more tests for the setColor method and other functionalities
});

describe('Square', () => {
  test('render method should return the correct SVG string', () => {
    const square = new Square(100);
    square.setColor('green');
    expect(square.render()).toBe('<rect width="100" height="100" fill="green" />');
  });
  // Add tests for setColor method and other functionalities
});

describe('Triangle', () => {
  test('render method should return the correct SVG string', () => {
    const triangle = new Triangle(100);
    triangle.setColor('blue');
    expect(triangle.render()).toBe('<polygon points="0,100 100,100 50,0" fill="blue" />');
  });
  // Add tests for setColor method and other functionalities
});
