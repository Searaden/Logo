class Circle {
  constructor(radius, logoCharacters) {
    this.radius = radius;
    this.fillColor = 'black';
    this.logoCharacters = logoCharacters;
  }

  setColor(color) {
    this.fillColor = color;
  }

  setTextColor(color) {
    this.textColor = color;
  }

  render() {
    return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.fillColor}" />`;
  }
}

class Square {
  constructor(sideLength, logoCharacters) {
    this.sideLength = sideLength;
    this.fillColor = 'black';
    this.logoCharacters = logoCharacters;
  }

  setColor(color) {
    this.fillColor = color;
  }

  setTextColor(color) {
    this.textColor = color;
  }

  render() {
    return `<rect width="${this.sideLength}" height="${this.sideLength}" fill="${this.fillColor}" />`;
  }
}

class Triangle {
  constructor(height, logoCharacters) {
    this.height = height;
    this.fillColor = 'black';
    this.logoCharacters = logoCharacters;
  }

  setColor(color) {
    this.fillColor = color;
  }

  setTextColor(color) {
    this.textColor = color;
  }

  render() {
    const halfHeight = this.height / 2;
    const points = `0,${this.height} ${this.height},${this.height} ${halfHeight},0`;
    return `<polygon points="${points}" fill="${this.fillColor}" />`;
  }
}

module.exports = { Circle, Square, Triangle };
