const { Triangle, Circle, Square } = require('./shapes');

test('Triangle renders correctly', () => {
  const shape = new Triangle();
  shape.setColor('blue');
  expect(shape.render()).toBe('<polygon points="150, 10 290, 190 10, 190" fill="blue" />');
});

test('Circle renders correctly', () => {
  const shape = new Circle();
  shape.setColor('red');
  expect(shape.render()).toBe('<circle cx="150" cy="100" r="80" fill="red" />');
});

test('Square renders correctly', () => {
  const shape = new Square();
  shape.setColor('green');
  expect(shape.render()).toBe('<rect x="60" y="20" width="180" height="180" fill="green" />');
});