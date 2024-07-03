class Shape {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="150, 10 290, 190 10, 190" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="60" y="20" width="180" height="180" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Triangle, Circle, Square };