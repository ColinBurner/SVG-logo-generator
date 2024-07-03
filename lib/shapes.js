// created shape class
class Shape {
    constructor() {
        // initializes color property to an empty string
      this.color = '';
    }
        // method for setting the color of the shape
    setColor(color) {
      this.color = color;
    }
  }
  
  // Triangle class inheriting from Shape
  class Triangle extends Shape {
    render() {
      return `<polygon points="150, 10 290, 190 10, 190" fill="${this.color}" />`;
    }
  }
  
  // Circle class inheriting from Shape
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  // Square class inheriting from Shape
  class Square extends Shape {
    render() {
      return `<rect x="60" y="20" width="180" height="180" fill="${this.color}" />`;
    }
  }
  
  // Export the Triangle, Circle, and Square classes as a module
  module.exports = { Triangle, Circle, Square };